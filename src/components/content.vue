<template>
    <div class="content-container">
        <div class="content-pane">

        </div>

        <div class="text-box-container">
          <input class="text-box" id="text-box" :placeholder="currentTextChannel"/>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'header',
    currentChannel: "General",
    computed: {
      currentTextChannel() {
        return `Message #${this.$store.getters.getCurrentTextChannel}`
      }
    }
  }
  </script>
  

  <style scoped>
    .content-container {
        width: 100%;
        height: 100%;
        background-color: #262628;
        /* border: 1px solid white; */
        box-shadow: 0.2px 3px 1.5px black;
        z-index: 5;
        display: grid;
        grid-template-rows: 90% 10%;
        color: rgb(239, 232, 232);
    }

    .content-pane {
      /* border: 1px solid red; */
    }

    .text-box-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-left: 5%;
      width: 90%;
      height: 80%;
      border-radius: 12px;
      background-color: #2d2d2f;
      border: none;
      outline: none;
      color: rgb(239, 232, 232);
      /* border: 1px solid blue; */
    }
    .text-box {
      margin-left: 5%;
      background-color: transparent;
      width: 90%;
      height: 50%;
      border: none;
      outline: none;
      color: rgb(239, 232, 232);
      font-size: 1em;
    }

    input::placeholder {
      color:#999;
      opacity:0.65;
    }
  </style>
  