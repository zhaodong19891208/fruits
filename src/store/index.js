import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import position from './position'


const store = new Vuex.Store({
    modules:{
        position
    }
})

export default store