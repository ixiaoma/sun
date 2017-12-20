<template>
<div>
<el-button
      size="mini"
      type="danger"
      @click="handleAccount">结算</el-button>
  <el-dialog title="结算" :visible.sync="dialogFormVisible">
  <el-form :model="form">
      <div class="accountDetail">
        <span class="title">结算详情</span>
        <p>房间号:<b>{{accountInfo.room_id}}</b></p>
        <p>住户名:<b>{{accountInfo.customer_name}}</b></p>
        <p>住房时间:<b>{{accountInfo.enter_time}}至{{accountInfo.leave_time}}</b></p>
        <p>房间类型:<b>{{accountInfo.type_name}}</b></p>
        <p>房间单价:<b>{{accountInfo.type_price}}</b></p>
      </div>
    <div class="checkbox">
      <span class="title">附加消费</span>
    <el-checkbox-group v-model="checkList">
    <el-checkbox label="矿泉水"></el-checkbox>
    <el-checkbox label="方便面"></el-checkbox>
    <el-checkbox label="橙汁"></el-checkbox>
    <el-checkbox label="禁用" disabled></el-checkbox>
    <el-checkbox label="选中且禁用" disabled></el-checkbox>
  </el-checkbox-group>
  </div>
    <el-form-item label="优惠活动" :label-width="formLabelWidth">
      <el-select v-model="form.favourable" placeholder="请选择优惠方案">
        <el-option label="会员卡" value="member"></el-option>
        <el-option label="优惠券" value="coupon"></el-option>
      </el-select>
    </el-form-item>
    <div class="allPrice">总消费:<span>￥{{parseInt(Math.abs(new  Date(accountInfo.enter_time)  -  new  Date(accountInfo.leave_time))  /  1000  /  60  /  60  /24)*accountInfo.type_price}}</span></div>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name:"account",
    data() {
      return {
          dialogTableVisible: false,
          dialogFormVisible: false,
          checkList: ['选中且禁用','复选框 A'],
          form: {
            timevalue:"",
            roomId: '',
            favourable:''
          },
          formLabelWidth: '120px',
          iDays:0
      };
    },
    props:{
      accountInfo : Object
    },
    methods:{
      ...mapActions(["updateOrder"]),
      handleAccount(){
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
  .checkbox{
    margin-bottom: 20px 
  }
  .allPrice{
    float: right;
    padding-right:30px
  }
  .allPrice span{
    color: #f03;
    font-size: 20px;
    font-weight: bold
  }
  .accountDetail,.checkbox{
    padding: 10px
  }
  .accountDetail b{
    margin-left: 10px;
  }
  .accountDetail p{
    margin-left: 50px;
    padding: 5px
  }
  .title{
    color: steelblue;
    font-size: 16px;
  }
  .el-checkbox-group{
    margin-left: 50px
  }
</style>
