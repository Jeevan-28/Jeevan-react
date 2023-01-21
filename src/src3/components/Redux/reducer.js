

const initialState = 5000000;

const changeNumber = (state = initialState, action) => {
    switch (action.type){
        case "INCREMENT" : return state + 500;
        case "DECREMENT" : return state - 500;
        case "RESET" : return 0 ;
        default: return state;

    }
}
export default changeNumber;