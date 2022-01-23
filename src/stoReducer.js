const defaultState = {
    sto: 45
}

const ADD_STO = "ADD_STO";
const GET_STO = "GET_STO";

export const stoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_STO:
            return {...state, sto: state.sto + action.payload}
        case GET_STO:
            return {...state, sto: state.sto + action.payload}
        default:
            return state;
    }
}

export const plusStoAction = (payload) => ({type:ADD_STO,payload})
export const minusStoAction = (payload) => ({type:GET_STO, payload})