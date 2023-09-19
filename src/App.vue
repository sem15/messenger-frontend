<template>
  <div class="app-main">
    <HeaderBar class="header-bar"/>
    <Navbar class="navbar" />
    <Channels class="channels-area" @joinVC="joinVC" />
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
      sessionID: undefined,
      configuration: {'iceServers': [{'urls': 'stun:stun.l.google.com:19302'}]},
      // peerConnection: undefined,
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
    SocketioService.requestSessionID()

    //get permissions for user mic
    // this.getMicPermissions()

    // Listen for the "offer" event
    SocketioService.socket.on("offer", async (offer) => {
      console.log("Detected Offer:", offer)

      const peerConnection = new RTCPeerConnection(this.configuration);
      // console.log(peerConnection)

      // Accept the offer
      peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
      console.log("after", peerConnection.currentRemoteDescription)

      // Create an answer
      let answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);

      // Send the answer to the other client
      SocketioService.socket.emit("offer-response", {
        answer: answer,
      });
    });

    // SocketioService.socket.on("offer-response", async (response) => {
    //   console.log("Detected Offer Reponse:", response)
    //   console.log(peerConnection.iceGatheringState)
    // });

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
    joinVC(channelName) {
      console.log("Joining:", channelName)
      this.makeCall()
    },
    async makeCall() {

      const peerConnection = new RTCPeerConnection(this.configuration);

      // Create an offer and send it to the signal channel
      let offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);
      console.log("before", peerConnection.currentRemoteDescription)
      SocketioService.socket.emit("offer", {
        offer: offer,
      });

      SocketioService.socket.on("offer-response", async (response) => {
        console.log("Detected Offer Reponse:", response)
        // Set the remote description
        peerConnection.setRemoteDescription(new RTCSessionDescription(response));
        console.log("after", peerConnection.currentRemoteDescription)
        console.log(peerConnection)
      });

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