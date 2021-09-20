
import { createStore } from 'vuex'
import getRandomInt from '../helpers/getRandomInt'


export default createStore({
    state() {
        return{
         count:0  ,
         lastMutation: 'none' ,
         isLoading: false
        }
      
    },
    mutations:{
        increment( state ){
            state.count++
            state.lastMutation = 'increment'
        },
        incrementBy( state, val ){
            state.count += val
            state.lastMutation = 'incrementBy'
        },
        setLoading(state){
            state.isLoading = !state.isLoading
        }
    },
    actions:{
       async  incrementRandomInt({commit}){
             commit('setLoading')
             const randomInt = await getRandomInt()
            
             commit('incrementBy', randomInt )
             commit('setLoading')
            }
        }
})
