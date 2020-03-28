<template>
  <div id="aoxiang-blog-wrap">
    <el-header height="40px">
      <main-head></main-head>
    </el-header>
    <el-container>
      <el-aside width="240px">
        <left-nav></left-nav>
      </el-aside>
      <el-main>
        <transition name="pageSwitch">
          <router-view />
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import MainHead from "@/components/Head/index.vue";
import LeftNav from "@/components/LeftNav/index.vue";
@Component({
  components: {}
})
export default class Dipont extends Vue {}
</script>

<style lang="less">
.aoxiang-blog-wrap {
}
</style>
