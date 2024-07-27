<!-- src/components/Header.vue -->
<template>
    <header>
      <nav class="navbar">
        <div class="navbar-brand">
          <a href="#" class="navbar-item">
            <i class="fas fa-chart-bar"></i>
            <span>Age/BloodGroup Dashboard</span>
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <a href="#" class="navbar-item">
              Home
            </a>
            <a href="#" class="navbar-item">
              About
            </a>
            <a href="#" class="navbar-item">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  };
  </script>
  
  <style scoped>
  header {
    background-color: #42A5F5;
    padding: 1rem;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .navbar-brand .navbar-item {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
  }
  
  .navbar-brand .navbar-item i {
    margin-right: 0.5rem;
  }
  
  .navbar-menu {
    display: flex;
    align-items: center;
  }
  
  .navbar-end .navbar-item {
    margin-left: 1rem;
    color: white;
    text-decoration: none;
  }
  
  .navbar-end .navbar-item:hover {
    text-decoration: underline;
  }
  </style>
  