<template>
  <div class="app-main">
    <HeaderBar class="header-bar"/>
    <Navbar class="navbar" />
    <Channels class="channels-area" />
    <Content class="content-area" />
  </div>
</template>

<script>
import Navbar from './components/navbarLeft.vue'
import HeaderBar from './components/headerBar.vue'
import Channels from './components/channelsList.vue'
import Content from './components/contentPane.vue'
import SocketioService from './services/socketio.service.js';


export default {
  name: 'App',
  components: {
    Navbar,
    HeaderBar,
    Channels,
    Content
  },
  data() {
    return {
      sessionID: undefined
    }
  },
  created() {
    SocketioService.setupSocketConnection();
    SocketioService.socket.on('return-sessionid', (data) => {
      this.sessionID = data
      this.$store.commit('setSessionID', data)
    });
  },
  beforeUnmount() {
    SocketioService.disconnect();
  },
  async mounted() {
    // SocketioService.message("mounted ran");
    SocketioService.requestSessionID()

    //get permissions for user mic
    // this.getMicPermissions()

  },
  methods: {
    getMicPermissions() {
      const openMediaDevices = async (constraints) => {
        return await navigator.mediaDevices.getUserMedia(constraints);
      }
      try {
        const stream = openMediaDevices({'video':false,'audio':true});
        console.log('Got MediaStream:', stream);
      } catch(error) {
        console.error('Error accessing media devices.', error);
      }
    },
  },
}
</script>

<style>
#app {
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
.app-main {
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: #1E1E1F;
  margin: 0;
  padding: 0;
  /* overflow: clip; */
  display: grid;
  grid-template-columns: 4% 13% 70% 13%;
  grid-template-rows: 10% 45% 45%;
  grid-template-areas: 
    "navbar header header header"
    "navbar channels content serverinfo"
    "navbar channels content serverinfo";
}

.navbar {
  grid-area: navbar;
}

.header-bar {
  grid-area: header;
}

.channels-area {
  grid-area: channels;
}

.content-area {
  grid-area: content;
}

</style>