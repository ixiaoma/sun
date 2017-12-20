<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane :label="data.type_name" v-for="(data,index) in typeList" :name="'tag'+data.type_id" :key="data.type_id">
        <type></type>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
import type from './type.vue'
  export default {
    data() {
      return {
        activeName: 'tag1'
      };
    },
    computed:{
        ...mapGetters(["typeList"])
    },
    methods: {
      ...mapActions(["getTypeList","getRoomData"]),
      handleClick(tab) {
          this.getRoomData({typeId:tab.$vnode.data.key,pageSize:5,pageNum:1})
        },
    },
    components:{
        type
    },
    mounted(){
        this.getTypeList()
        this.getRoomData({typeId:1,pageSize:5,pageNum:1})
    }
  };
</script>