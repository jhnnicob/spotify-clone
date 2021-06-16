export const initialState = {
    user: null,
    playLists: [],
    playing: false,
    item: null,
    token: "BQA8bnSpMBdLJFirLE1IloELDBI99haqt0QxHjJ1zUvdKue31WUYhW6LvWTOc-s2ZvxWxeSdR6Uli_h4FCJb5WpHbv2VbNX54EuJAm2FXap374nSZ_H8hIQkOqJawVMWLYl6-X7xsZS7zqMtvscRLrASY4lu7L4SF5rWCRrKtZ08cGpp"
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, 
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}   

export default reducer;