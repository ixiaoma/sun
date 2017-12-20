import axios from 'axios'

export default {
    state:{
        typeList:[],
        listData:{},
        pageNum:1,
        typeId:1
    },
    getters:{
        typeList : state => state.typeList,
        roomData : state => state.listData.roomData,
        count : state => state.listData.count,
        typeId : state => state.typeId
    },
    mutations:{
        TYPE_LIST(state,{typeList}){
            state.typeList = typeList
        },
        ROOM_DATA(state,{listData,pageNum,typeId}){
            state.listData = listData,
            state.pageNum = pageNum,
            state.typeId = typeId
            listData.roomData.forEach(element => {
                //console.log(element.room_state)
               element.room_state = element.room_state ? "有客" : "空房"
            });
            //console.log(roomData.room_state)
        }
    },
    actions:{
        getTypeList({commit}){
            axios.get("http://10.9.151.112:3000/api/product/getDetailData").then(res=>{
                //console.log(res.data)
                commit("TYPE_LIST",{typeList:res.data})
            })
        },
        getRoomData({commit},{typeId,pageSize,pageNum}){
            axios.get(`http://10.9.151.112:3000/api/product/getRoomData?typeId=${typeId}&pageSize=${pageSize}&pageNum=${pageNum}`).then(res=>{
                //console.log(typeId)
                commit("ROOM_DATA",{listData:res.data,pageNum,typeId})
            })
        }
    }
        
}