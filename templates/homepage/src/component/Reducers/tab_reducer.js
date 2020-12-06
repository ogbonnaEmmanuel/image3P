const initState = {
    currentTab: 'web_color',
}

const TabReducer = ((state = initState, action) => {
    switch (action.type) {
        case 'update_tab':
            return {
                currentTab: action.tab_name
            }
        default:
            return state
    }
})
export default TabReducer