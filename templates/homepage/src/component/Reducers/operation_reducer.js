const initState = {
    platform: '',
    user_selected_operation: {},
}

const OperationReducer = ((state = initState, action) => {
    let operation = state.user_selected_operation
    switch (action.type) {
        case 'single_update':
            operation[action.operation] = action.operation
            return {
                platform: action.platform,
                user_selected_operation: operation
            }
        case 'single_delete':
            delete operation[action.operation]
            return {
                platform: action.platform,
                user_selected_operation: operation
            }
        case 'SELECT_ALL':
            operation = action.operations
            return {
                platform: action.platform,
                user_selected_operation: operation
            }
        case 'DELETE_ALL':
            operation = action.operations
            return {
                platform: action.platform,
                user_selected_operation: operation
            }
        default:
            return state
    }
})

export default OperationReducer