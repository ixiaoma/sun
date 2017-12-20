import Vue from 'vue'
import Vuex from 'vuex'
import roomList from './modules/roomlist'
import orderlist from './modules/orderlist'
import control from './modules/control'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        roomList,
        orderlist,
        control
    }
})

export default store