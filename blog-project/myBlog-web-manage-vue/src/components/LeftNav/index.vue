<template>
  <div class="left-nav-wrapper">
    <h2 class="top-title">Educational Management</h2>
    <ul>
      <router-link :to="{ path: '/educationAdminstraction/schedule' }">
        <li>
          <div>
            <img src="@/assets/img/nav_schedule.png" />
          </div>
          Schedule
        </li>
      </router-link>
      <router-link :to="{ path: '/educationAdminstraction/teachers' }">
        <li>
          <div>
            <img src="@/assets/img/nav_teacher.png" />
          </div>
          Teachers
        </li>
      </router-link>
      <router-link :to="{ path: '/educationAdminstraction/classmodule' }">
        <li>
          <div>
            <img src="@/assets/img/nav_class_act.png" />
          </div>
          Class
        </li>
      </router-link>
      <router-link
        v-if="this.authPathMsg.includes('/educationAdminstraction/system')"
        :to="{ path: '/educationAdminstraction/system' }"
      >
        <li>
          <div>
            <img src="@/assets/img/nav_system.png" />
          </div>
          System
        </li>
      </router-link>
    </ul>
    <h2 class="top-title">Teaching R&D</h2>
    <ul>
      <router-link :to="{ path: '/educationAdminstraction/course' }">
        <li>
          <div>
            <img src="@/assets/img/nav_courselist.png" />
          </div>
          Course
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: {}
})
export default class LeftNav extends Vue {}
</script>

<style lang="less" scoped>
.left-nav-wrapper {
  box-sizing: border-box;
  .top-title {
    color: #333;
    font-size: 14px;
    line-height: 40px;
    height: 40px;
    width: 222px;
    margin: 0 auto;
    padding-left: 24px;
  }
  h2:nth-of-type(2) {
    border-top: 2px solid #e7e7e7;
  }
  ul {
    a {
      text-decoration: none;
    }
    li {
      padding-left: 14px;
      height: 40px;
      font-size: 12px;
      color: rgba(102, 102, 102, 1);
      line-height: 40px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 222px;
      margin: 1px auto;
      text-decoration: none;
      transition: all 0.3s ease;
      &:hover {
        background-color: rgba(241, 91, 92, 0.3);
      }
      div {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
      }
      img {
        max-width: 20px;
        max-height: 20px;
        display: flex;
      }
    }
  }
}
.router-link-active {
  background-color: $color-common;
  display: block;
  width: 222px;
  margin: 1px auto;
  li {
    color: #fff !important;
  }
}
</style>
