const reducer = (state={name:'mahesh'}, action) => {
    if(action.type==='CHANGE_NAME')
    {
        return {name:action.payload};
    }
    return state;
}

export default reducer;