<template>
<div>
<el-button
      size="mini"
      @click="handleEdit">编辑</el-button>
  <el-dialog title="修改订单" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="房间号" :label-width="formLabelWidth">
      <el-input v-model="form.roomId" auto-complete="off"></el-input>
    </el-form-item>
    <div class="block">
    <span class="demonstration">选择时间</span>
    <el-date-picker
      v-model="form.timevalue"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="changeOrder(orderId)">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name:"edit",
    data() {
      return {
          dialogTableVisible: false,
          dialogFormVisible: false,
          form: {
            timevalue:"",
            roomId: ''
          },
          formLabelWidth: '120px'
      };
    },
    props:{
      orderId : Number
    },
    methods:{
      ...mapActions(["updateOrder"]),
      handleEdit(){
        this.dialogFormVisible = true
      },
      changeOrder(orderId){
        this.dialogFormVisible = false
        this.form.timevalue[0] = new Date(this.form.timevalue[0]).toISOString().slice(0,10)
        this.form.timevalue[1] = new Date(this.form.timevalue[1]).toISOString().slice(0,10)
        //console.log(this.form.timevalue[0],this.form.timevalue[0])
        this.updateOrder({orderId,roomId:this.form.roomId,enterTime:this.form.timevalue[0],leaveTime:this.form.timevalue[1]})
      }
    }
  }
</script>
<style>
  .block{
    margin-left: 60px;
    margin-bottom: 20px 
  }
</style>
