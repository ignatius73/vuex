import  getRandomInt  from '../../helpers/getRandomInt'
import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const counterStore = {
    namespaced: true,
    //Ojo es un objeto reactivo
    state,
    mutations,
    actions,
    getters
}

export default counterStore