<template>
    <div class="channels-container">
        <div class="channels-list" v-for="title in channelsList" :key="title">
          <div v-if="title.type=='text'" class="channel-name">
            <font-awesome-icon icon="fa-solid fa-hashtag" />&nbsp;
            {{ title.name }}</div>
          <div v-else class="channel-name">
            <font-awesome-icon icon="fa-solid fa-volume-high"/>&nbsp;
            {{ title.name }}</div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'header',
    data() {
      return { 
        channelsList: [
          {
            name: "Text Channel 1",
            type: "text"
          },
          {
            name: "Text Channel 2",
            type: "text"
          },
          {
            name: "Voice Channel",
            type: "voice"
          },
        ]
      }
    },
  }
  </script>
  

  <style scoped>
    .channels-container {
        width: 100%;
        height: 100%;
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 5%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        color: rgb(176, 170, 170);
        /* border: 1px solid white; */
    }

    .channels-list {
      width: 93%;
    }

    .channel-name {
      padding: 2%;
      font-size: 1em;
      border-radius: 4px;
      user-select: none;
      cursor: pointer;
      /* border: 1px solid red; */
    }

    .channel-name:hover {
      color: rgb(239, 232, 232);
      background-color: #505054;
    }
  </style>
  