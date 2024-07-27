<template>
    <div>
      <highcharts :options="chartOptions"></highcharts>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import Highcharts from 'highcharts';
  import HighchartsVue from 'highcharts-vue';
  import localforage from 'localforage';
  import { db } from '../firebase';
  import { collection, getDocs } from 'firebase/firestore';
  
  export default {
    components: {
      highcharts: HighchartsVue.component
    },
    setup() {
      const chartOptions = ref({
        chart: {
          type: 'column'
        },
        title: {
          text: 'Welcome User Data'
        },
        xAxis: [{
          categories: ['A', 'A+', 'A-', 'B', 'B+', 'B-', 'AB', 'AB+', 'AB-', 'O', 'O+', 'O-'],
          title: {
            text: 'Blood Groups'
          }
        }, {
          categories: ['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71+'],
          opposite: true,
          title: {
            text: 'Age Ranges'
          }
        }],
        yAxis: {
          min: 0,
          title: {
            text: 'Number of People'
          }
        },
        series: [{
          name: 'Blood Group',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          xAxis: 0
        }, {
          name: 'Age Range',
          data: [0, 0, 0, 0, 0, 0, 0, 0],
          xAxis: 1
        }]
      });
  
      onMounted(async () => {
        try {
      
          let users = await localforage.getItem('users');
  
          if (!users) {
          
            const querySnapshot = await getDocs(collection(db, 'users'));
            users = querySnapshot.docs.map(doc => doc.data());
  
            await localforage.setItem('users', users);
          }
  
         
          console.log('Fetched users:', users);
  
          
          const bloodGroups = {
            'A': 0, 'A+': 0, 'A-': 0,
            'B': 0, 'B+': 0, 'B-': 0,
            'AB': 0, 'AB+': 0, 'AB-': 0,
            'O': 0, 'O+': 0, 'O-': 0
          };
  
          const ageRanges = {
            '0-10': 0, '11-20': 0, '21-30': 0, '31-40': 0,
            '41-50': 0, '51-60': 0, '61-70': 0, '71+': 0
          };
  
          users.forEach(user => {
            const group = user.bloodGroup;
            const age = user.age;
  
            if (bloodGroups.hasOwnProperty(group)) {
              bloodGroups[group]++;
            }
  
            if (age >= 0 && age <= 10) ageRanges['0-10']++;
            else if (age >= 11 && age <= 20) ageRanges['11-20']++;
            else if (age >= 21 && age <= 30) ageRanges['21-30']++;
            else if (age >= 31 && age <= 40) ageRanges['31-40']++;
            else if (age >= 41 && age <= 50) ageRanges['41-50']++;
            else if (age >= 51 && age <= 60) ageRanges['51-60']++;
            else if (age >= 61 && age <= 70) ageRanges['61-70']++;
            else if (age >= 71) ageRanges['71+']++;
          });
  
          // Log processed data
          console.log('Blood groups data:', bloodGroups);
          console.log('Age ranges data:', ageRanges);
  
          chartOptions.value.series[0].data = Object.values(bloodGroups);
          chartOptions.value.series[1].data = Object.values(ageRanges);
  
        } catch (error) {
          console.error('Error fetching data from Firestore:', error);
        }
      });
  
      return {
        chartOptions
      };
    }
  };
  </script>
  
  <style scoped>
  
  div {
    width: 80%;
    height: 400px;
    margin: 40px auto;
  }
  </style>
  