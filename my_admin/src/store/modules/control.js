import axios from 'axios'

export default{
    state:{
        detailData:[]
    },
    getters:{
        detailData : state=>state.detailData
    },
    mutations:{
        DETAIL_DATA(state,{detailData}){
            state.detailData = detailData
        }
    },
    actions:{
        getDetailData({commit}){
            axios.get("http://10.9.151.112:3000/api/product/getDetailData").then(res=>{
                console.log(res.data)
                commit("DETAIL_DATA",{detailData:res.data})
            })
        }
    }
}