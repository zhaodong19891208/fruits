
import { 
    SETPOSITION,
    GETID
 } from './const'

let mutations = {
    [SETPOSITION] (state,city) {
        state.city = city
    },
    [GETID] (state,id) {
    	state.id = id
    }
}

export default mutations