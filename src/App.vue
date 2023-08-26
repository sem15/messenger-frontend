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

.channels {
  grid-area: channels;
}

.content {
  grid-area: content;
}

</style>