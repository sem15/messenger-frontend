<template>
  <div class="app-main">
    <HeaderBar class="header-bar"/>
    <Navbar class="navbar" />
    <Channels class="channels" />
    <Content class="content" />
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
import HeaderBar from './components/headerBar.vue'
import Channels from './components/channels.vue'
import Content from './components/content.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    HeaderBar,
    Channels,
    Content
  }
}
</script>

<style>
.palette {
  background-color: #474448;
  background-color: #2D232E;
  background-color: #E0DDCF;
  background-color: #534B52;
  background-color: #F1F0EA;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  display: grid;
  grid-template-columns: 4% 13% 71% 12%;
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

.channels {
  grid-area: channels;
}

.content {
  grid-area: content;
}

</style>