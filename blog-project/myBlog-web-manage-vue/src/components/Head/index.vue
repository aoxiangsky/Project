<template>
  <div class="head-wrapper">
    <div class="logo">
      9999
    </div>
    <div class="right-component"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
// import UserInfo from "@/components/UserInfo/index.vue";

@Component({
  components: {
    // "User-Info": UserInfo
  }
})
export default class MainHead extends Vue {}
</script>

<style lang="less" scoped>
.head-wrapper {
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .logo {
    display: flex;
    align-items: center;
  }
  .right-component {
    display: flex;
    .time-zone-select {
      height: 100%;
      display: flex;
      align-items: center;
    }
    .user-info {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
}
</style>
