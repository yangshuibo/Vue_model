<template>
  <div id="home">
    <Home-nav></Home-nav>
    <Home-list></Home-list>
    <Home-footer></Home-footer>
  </div>
</template>

<script>
//
import HomeNav from '../components/Home/Nav.vue'
import HomeList from '../components/Home/List.vue'
import HomeFooter from '../components/Home/Footer.vue'
import {bus} from '../bus/bus'
//
export default {
  name: 'home',
  components: {HomeNav, HomeList, HomeFooter},
  data() {
    return {
      
    }
  }
}
</script>

<style>

</style>
