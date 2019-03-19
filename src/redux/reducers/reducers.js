let defaultState = {
    a:'',
    b:''
}

const reducers = (state = defaultState, action) =>{
    switch(action.type){
        case 'EXEMPLE':
            return {
                ...state,
                a:'la'
            }
        default: return state;
    }
}

export default reducers;