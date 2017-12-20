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
          <el-menu-item index="/product">
            <i class="el-icon-setting"></i>
            <span slot="title">房间信息</span>
          </el-menu-item>
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
import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'sideMenu',
  data () {
    return {
      defaultActive : '/home'
    }
  },
  computed:{
    ...mapGetters(["typeList"])
  },
  methods:{
    ...mapActions(["getTypeList"])
  },
  mounted(){
    this.defaultActive = this.$route.fullPath
    this.getTypeList()
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
