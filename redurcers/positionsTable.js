function positionsTable(state = [], action) {
    console.log('action',action)
    switch (action.type) {
        case 'SET_POSITONSTABLE_LIST': {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export default positionsTable;