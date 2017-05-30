export const allCalls = (state = {
    isFetching: false,
    data: [],
    error: null
}, action) => {
    switch (action.type) {
        case 'ALL_CALLS_REQUEST':
            return {
                ...state,
                isFetching: action.isFetching
            };
        case 'ALL_CALLS_SUCCESS':
            return {
                ...state,
                isFetching: action.isFetching,
                data: action.data
            };
        case 'ALL_CALLS_ERROR':
            return {
                ...state,
                isFetching: action.isFetching,
                error: action.error
            };
        default:
            return state;
    }
};