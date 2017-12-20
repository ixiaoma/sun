<template>
  <div class="layout">
   <a-header></a-header> 
   <div class="container">  
   <a-side-menu></a-side-menu>
    <div class="content">
      <router-view></router-view>
    </div>
   </div>
  </div>
</template>

<script>
import aHeader from './Header'
import aSideMenu from './SideMenu'
export default {
  name: 'layout',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    aHeader,
    aSideMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  display: flex
}
.content{
  flex: 1;
  padding: 20px
}
</style>
