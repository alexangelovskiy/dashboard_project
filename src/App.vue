<template>
  <div class="flex h-screen main-container mx-auto box-border">
    <LeftMenu />
    <MainContent />
  </div>
</template>
  
<script>
import LeftMenu from '@/components/LeftMenu.vue'
import MainContent from '@/components/MainContent.vue'
import jsonData from '@/student_data.json'

export default {
  name: 'App',
  components: {
    LeftMenu, MainContent
  },
  data() {
    return {

    }
  },
  created() {
    this.$store.commit('setJsonData', jsonData)
  }
}
</script>
  
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}

.main-container {
  max-width: 1920px;
}

::-webkit-scrollbar {
  height: 8px;
  width: 2px;
}

::-webkit-scrollbar-thumb {
  background: #93b4e9;

  &:hover {
    background-color: #76f0c6;
  }
}
</style>
  