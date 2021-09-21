
import { createStore } from 'vuex'
import getRandomInt from '../helpers/getRandomInt'
import counterStore from './counter'


export default createStore({

    modules:{
        counter: counterStore
    }
    
})
