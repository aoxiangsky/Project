<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  color: #333;
  height: 100vh;
  font-size: 14px;
  overflow-y: scroll;
  background-color: #f4f5f5;
}
.el-input .el-input__inner{
  border: 1px solid #fff !important;
}
.el-input.is-disabled .el-input__inner {
  background: #fff;
  cursor: auto;
  color: #909090;
}

</style>
