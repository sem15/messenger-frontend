<template>
    <div class="channels-container">
        <div class="channels-list" v-for="title in channelsList" :key="title">
          <div v-if="title.type=='text'" class="channel-name" @click="changeTextChannel(title.name)">
            <font-awesome-icon icon="fa-solid fa-hashtag" />
            {{ title.name }}
          </div>
          <div v-else class="channel-name">
            <font-awesome-icon icon="fa-solid fa-volume-high"/>
            {{ title.name }}
          </div>
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
            name: "General",
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
    methods: {
      changeTextChannel(channelName) {
        this.$store.commit('changeTextChannel', channelName)
      }
    }
  }
  </script>
  

  <style scoped>
    .channels-container {
        width: 100%;
        height: 95%;
        padding-top: 5%;
        padding-left: 5%;
        padding-right: 5%;
        color: rgb(176, 170, 170);
        /* border: 1px solid white; */
    }

    .channels-list {
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      /* border: 1px solid red; */
    }

    .channel-name {
      padding: 2%;
      font-size: 1em;
      border-radius: 4px;
      user-select: none;
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 3%;
      width: 100%;
      /* border: 1px solid red; */
    }

    .channel-name:hover {
      color: rgb(239, 232, 232);
      background-color: #505054;
    }
  </style>
  