export const etherReceived = (state = {
    isFetching: false,
    data: [],
    error: null
}, action) => {
    switch (action.type) {
        case 'ETHER_RECEIVED_REQUEST':
            return {
                ...state,
                isFetching: action.isFetching
            };
        case 'ETHER_RECEIVED_SUCCESS':
            return {
                ...state,
                isFetching: action.isFetching,
                data: action.data
            };
        case 'ETHER_RECEIVED_ERROR':
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }
};