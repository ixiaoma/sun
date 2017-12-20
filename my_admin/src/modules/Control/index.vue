<template>
<div class="control">
  <el-table
    :data="detailData"
    style="width: 100%">
    <el-table-column
      label="房间类型"
      width="150">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.type_name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="房间价格"
      width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.type_price }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="房间介绍"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.home_introduct }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="详情介绍"
      width="160">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.detail_introduct }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="房间图片"
      width="150">
      <template slot-scope="scope">
        <img width="100px" height="100px" :src="scope.row.type_img">
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <add></add>
</div>
</template>

<script>
import add from './Add.vue'
import {mapActions,mapGetters} from 'vuex'
  export default {
    components:{
      add
    },
    computed:{
      ...mapGetters(["detailData"])
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      ...mapActions(["getDetailData"])
    },
    mounted(){
      this.getDetailData()
    }
  }
</script>