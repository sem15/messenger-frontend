<template>
    <div class="header-container">
      <div class="header-layout">
        <div></div>
        <div class="server-text"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'header',
  }
  </script>
  

  <style scoped>
    .header-container {
        width: 100%;
        height: 100%;
        background-color: #121212;
        box-shadow: 4px 0.2px 2.5px black;
        z-index: 10;
    }

    .header-layout {
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-rows: 20% 80%;
    }

    .server-text {
      background-color: #1E1E1F;
      border-top-left-radius: 6px;
    }
  </style>
  