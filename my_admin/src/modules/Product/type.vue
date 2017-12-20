<template>
    <div class="typeComponent">
        <el-table
            :data="roomData"
            border
            style="width: 100%">
            <el-table-column
            fixed
            prop="room_id"
            label="房间号"
            width="100">
            </el-table-column>
            <el-table-column
            prop="home_introduct"
            label="概况介绍"
            width="200">
            </el-table-column>
            <el-table-column
            prop="detail_introduct"
            label="房间详情"
            width="200">
            </el-table-column>
            <el-table-column
            prop="type_price"
            label="房间价格"
            width="120">
            </el-table-column>
            <el-table-column
            prop="room_state"
            label="房间状态"
            width="200">
            </el-table-column>
            <el-table-column
            label="操作"
            width="100">
            <template slot-scope="scope">
                <el-button @click="editClick(scope.row)" type="text" size="small">编辑</el-button>
                <el-button type="text" size="small">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <div>
        <el-row>
          <el-col :span="12" :offset="6">
            <el-pagination
              :page-size="5"
              layout="prev, pager, next"
              :total="count"
              @current-change="changePage"
              >
            </el-pagination>
          </el-col>
        </el-row>
      </div>
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
    export default{
        name:"type",
        props:{
            typeNum:Number
        },
        methods: {
            ...mapActions(["getRoomData"]),
            changePage(currentPage){
                this.getRoomData({typeId:this.typeId,pageSize:5,pageNum:currentPage})
            }
        },
        computed:{
            ...mapGetters(["roomData","count","typeId"])
        }
    }
</script>
<style>
    .el-table--border .has-gutter th:nth-last-of-type(2){
        border-right: 1px solid #e6ebf5
    }
</style>
