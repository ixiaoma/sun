<template>
    <div class="product">
        <el-table
            :data="orderList"
            style="width: 100%">
             <el-table-column
            label="房间号"
            width="100">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.room_id }}</span>
            </template>
            </el-table-column>
             <el-table-column
            label="住户姓名"
            width="100">
            <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.customer_name }}</p>
                <p>电话: {{ scope.row.customer_phone }}</p>
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.customer_name }}</el-tag>
                </div>
                </el-popover>
            </template>
            </el-table-column>
            <el-table-column
            label="入住日期"
            width="120">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.enter_time }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="离开日期"
            width="120">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.leave_time }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="房间类型"
            width="150">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.type_name }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="房间单价"
            width="100">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.type_price }}</span>
            </template>
            </el-table-column>
            <el-table-column label="操作">
            <template slot-scope="scope">
                <div class="editDiv" >
                    <edit :orderId = "scope.row.order_id"></edit>
                </div>
                <div class="accountDiv" >
                    <account :accountInfo = "scope.row"></account>
                </div>
            </template>
            </el-table-column>
        </el-table>
        <add></add>
    </div>
</template>

<script>
import edit from './Edit.vue'
import add from './Add.vue'
import account from './Account.vue'
import {mapActions,mapGetters} from 'vuex'
    export default{
        name: "order",
            computed:{
                ...mapGetters(["orderList"])
            },
            methods: {
            ...mapActions(["getOrderData"]),
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            handleRemove(file, fileList) {
                    console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        },
        components:{
            edit,
            add,
            account
        },
        mounted(){
            this.getOrderData()
        }
    }
</script>
<style>
    .editDiv,.accountDiv{
        display: inline-block
    }
</style>
