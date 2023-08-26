<template>
    <div class="header-container">
      <div class="header-layout">
        <div></div>
        <div class="header-content">
          <div class="server-title">Server Name</div>
          <div class="header-channel-title">
            <font-awesome-icon icon="fa-solid fa-hashtag" />&nbsp;
            {{ $store.state.currentTextChannel }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'headerBar',
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
      border-top-left-radius: 12px;
    }

    .header-content {
      /* border: 1px solid red; */
      background-color: #1E1E1F;
      color: white;
      border-top-left-radius: 12px;
      display: grid;
      grid-template-columns: 13.5% 86.5%;
    }

    .server-title {
      color: white;
      border-top-left-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 7%;
      font-size: 1.15em;
      font-weight: bold;
      background-color: #262628;
      /* border: 1px solid white; */
    }

    .header-channel-title {
      color: white;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 1%;
      font-size: 1.15em;
      font-weight: bold;
      background-color: #262628;
      /* border: 1px solid red; */
    }

    .channel-title-icon {
      font-weight: normal;
    }
  </style>
  