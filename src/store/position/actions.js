

import {
    GETPOSITION,SETPOSITION
} from './const'

let actions = {
    [GETPOSITION] ({commit}) {
        if(localStorage.city){
            commit(SETPOSITION,localStorage.city);return ;
        }

        //开始获取定位
        setTimeout(() => {
            let city = '北京'
            commit(SETPOSITION,city)
            localStorage.city = city
        }, 1500);
    }
}

export default actions