<template>
  <div class="author">
    <div class="author-avatar">
      <el-avatar :size="90" :src = avatar></el-avatar>
    </div>
    <div class="author-info">
      <div class="username">{{ userInfo.nickname }}</div>
      <div class="position">
        <div class="center" v-if="userInfo.job">
          <svg width="21" height="18" viewBox="0 0 21 18" class="icon"><g fill="none" fill-rule="evenodd"><path data-v-34b23271="" fill="#72777B" d="M3 8.909V6.947a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1V8.92l-6 2.184v-.42c0-.436-.336-.79-.75-.79h-1.5c-.414 0-.75.354-.75.79v.409L3 8.909zm0 .7l6 2.184v.47c0 .436.336.79.75.79h1.5c.414 0 .75-.354.75-.79v-.46l6-2.183V16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.609zm6.75 1.075h1.5v1.58h-1.5v-1.58z"></path> <path data-v-34b23271="" stroke="#72777B" d="M7.5 5.213V4A1.5 1.5 0 0 1 9 2.5h3A1.5 1.5 0 0 1 13.5 4v1.213"></path></g></svg>
          <span>{{ userInfo.job }} | {{ userInfo.company }}</span>
        </div>
        <div class="addInfo" v-else>
          <span>+ 你喜欢什么工作？</span>
        </div>
      </div>
      <div class="position">
        <div class="center" v-if="userInfo.autograph">
          <svg width="21" height="18" viewBox="0 0 21 18" class="icon"><path fill="#72777B" fill-rule="evenodd" d="M4 4h13a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm9 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3 3a3 3 0 0 0-6 0h6zM5 7v1h4V7H5zm0 2.5v1h4v-1H5zM5 12v1h4v-1H5z"></path></svg>
          <span>{{ userInfo.autograph }}</span>
        </div>
        <div class="addInfo" v-else>
          <span>+ 你的人生格言是什么？</span>
        </div>
      </div>
    </div>
    <div class="author-action" @click="editInfo">
      <el-button type="primary" plain>编辑个人资料</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule }  from '../../store/modules/user'
import { IUserInfo } from '../../api/types'

@Component({
  components: {
  },
})

export default class extends Vue {
  private userInfo!: IUserInfo
  get nickname() {
    return UserModule.nickname
  }
  get autograph() {
    return UserModule.autograph
  }
  get avatar() {
    return UserModule.avatar
  }
  get job() {
    return UserModule.job
  }
  get company() {
    return UserModule.company
  }
  async created() {
    this.getUser()
  }
  private getUser() {
    this.userInfo = {
      avatar: this.avatar,
      autograph: this.autograph,
      company: this.company,
      job: this.job,
      nickname: this.nickname
    }
  }
  private editInfo() {
    this.$router.push({path: '/settings'})
  }
}
</script>
<style lang="scss" scoped>
.author {
  padding: 30px;
  box-sizing: border-box;
  width: 668px;
  height: 153px;
  cursor: pointer;
  background: #fff;
  display: flex;
  align-items: center;
  .author-info {
    margin: 0px 24px 0 28px;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .username {
      font-size: 28px;
      font-weight: 600;
      line-height: 1.2;
      color: #000;
    }
    .position {
      margin-top: 10px;
      font-size: 14px;
      line-height: 1.5;
      color: #72777b;
      &:last-child {
        margin-top: 5px;
      }
      .center {
        display: flex;
        align-items: center;
        .icon {
          margin-right: 5px;
        }
      }
      .addInfo {
        color: #4a68ad;
      }
    }
  }
}
</style>