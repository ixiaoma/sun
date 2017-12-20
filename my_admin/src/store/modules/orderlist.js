import axios from 'axios'

export default{
    state:{
        orderList : []
    },
    getters:{
        orderList : state => state.orderList
    },
    mutations:{
        ORDER_LIST(state,{orderList}){
            state.orderList = orderList
        },
        UPDATE_ORDER(state,{updateCode}){
            if(updateCode){
                console.log(updateCode)
                this.getOrderData
                alert("订单修改成功")
            }else{
                alert("订单修改失败")
            }
        },
        CREATE_ORDER(state,{createCode}){
            if(createCode){
                alert("添加订单成功")
            }else{
                alert("订单添加失败")
            }
        }
    },
    actions:{
        getOrderData({commit}){
            axios.get("http://10.9.151.112:3000/api/order/getOrderData").then(res=>{
                console.log(res.data)
                commit("ORDER_LIST",{orderList:res.data})
            })
        },
        updateOrder({commit},{orderId,roomId,enterTime,leaveTime}){
            axios.get(`http://10.9.151.112:3000/api/order/updateOrder?orderId=${orderId}&roomId=${roomId}&enterTime=${enterTime}&leaveTime=${leaveTime}`).then(res=>{
                //console.log(res.data)
                commit("UPDATE_ORDER",{updateCode:res.data})
            })
        },
        createOrder({commit},{typeId,roomId,enterTime,leaveTime,customerName,customerPhone}){
            axios.get(`http://10.9.151.112:3000/api/order/createOrder?typeId=${typeId}&roomId=${roomId}&enterTime=${enterTime}&leaveTime=${leaveTime}&customerName=${customerName}&customerPhone=${customerPhone}`).then(res=>{
                console.log(res.data)
                commit("CREATE_ORDER",{createCode:res.data})
            })
        }
    }
}