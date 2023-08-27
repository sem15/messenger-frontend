<template>
    <div class="message-container">
        <div class="user-icon">
            <font-awesome-icon icon="fa-solid fa-user"/>
        </div>
        <div class="post-right-side">
            <div class="message-top">{{ inputMessage.author }}</div>
            <div class="message-text">{{ inputMessage.text }}</div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'message',
    props: ['inputMessage'],
    computed: {
      currentTextChannel() {
        return `Message #${this.$store.getters.getCurrentTextChannel}`
      }
    },
    mounted() {
        console.log("message got:", this.inputMessage)
    }
  }
  </script>
  

  <style scoped>
    .message-container {
        /* border: 1px solid blue; */
        margin-top: 1%;
        display: flex;
        flex-direction: row;
        width: 100%;
        height: auto;
    }

    .post-right-side {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .message-top {
        color: rgb(239, 232, 232);
        font-weight: bold;
        margin-bottom: 0.5%;
    }

    .message-text {
        color: rgb(239, 232, 232);
        padding-right: 1%;
        /* border: 1px solid red; */
    }

    .user-icon {
        font-size: 2.3em;
        margin-right: 2%;
        margin-left: 2%;
    }
  </style>
  