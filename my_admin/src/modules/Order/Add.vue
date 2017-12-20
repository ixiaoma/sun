<template>
<div>
<el-button type="text" @click="dialogFormVisible = true">添加订单</el-button>
  <el-dialog title="订单信息" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="房间号" :label-width="formLabelWidth">
      <el-input v-model="form.roomId" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="住户姓名" :label-width="formLabelWidth">
      <el-input v-model="form.customerName" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="联系电话" :label-width="formLabelWidth">
      <el-input v-model="form.customerPhone" auto-complete="off"></el-input>
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
    <el-form-item label="房间类型" :label-width="formLabelWidth">
      <el-input v-model="form.typeId" auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="addOrder">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name:"control",
    data() {
      return {
          dialogTableVisible: false,
          dialogFormVisible: false,
          form: {
            roomId: '',
            customerName: '',
            customerPhone: '',
            typeId: '',
            timevalue: '',
            homeIntroduct: '',
            detailIntroduct: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          formLabelWidth: '120px'
      };
    },
    methods:{
      ...mapActions(["createOrder"]),
      addOrder(){
        this.dialogFormVisible = false
        this.form.timevalue[0] = new Date(this.form.timevalue[0]).toISOString().slice(0,10)
        this.form.timevalue[1] = new Date(this.form.timevalue[1]).toISOString().slice(0,10)
        this.createOrder({customerName:this.form.customerName,customerPhone:this.form.customerPhone,typeId:this.form.typeId,roomId:this.form.roomId,enterTime:this.form.timevalue[0],leaveTime:this.form.timevalue[1]})
      }
    }
  }
</script>


