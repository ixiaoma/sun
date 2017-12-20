<template>
  <div class="side-menu">
        <el-col :span="6">
        <el-menu
          :router = "true"
          :default-active="defaultActive"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="/home">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="/type1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>房间信息</span>
              </template>
              <el-menu-item index="/type1"><i class="el-icon-d-arrow-right"></i>现代简约风</el-menu-item>
              <el-menu-item index="/type2"><i class="el-icon-d-arrow-right"></i>行政双床房</el-menu-item>
              <el-menu-item index="/type3"><i class="el-icon-d-arrow-right"></i>温馨大床房</el-menu-item>
              <el-menu-item index="/type4"><i class="el-icon-d-arrow-right"></i>爱心情侣房</el-menu-item>
           </el-submenu>
          <el-menu-item index="/order">
            <i class="el-icon-document"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item index="/control">
            <i class="el-icon-setting"></i>
            <span slot="title">管理中心</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </div>
</template>

<script>
export default {
  name: 'sideMenu',
  data () {
    return {
      defaultActive : '/home'
    }
  },
  mounted(){
    this.defaultActive = this.$route.fullPath
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-item{
  min-width: 100px;
}
.el-col{
  width: 100%;
  min-width: 200px;
}
</style>
