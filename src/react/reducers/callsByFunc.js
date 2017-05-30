export const callsByFunc = (state = {
    isFetching: false,
    data: [],
    error: null
}, action) => {
    switch (action.type) {
        case 'CALLS_BY_FUNC_REQUEST':
            return {
                ...state,
                isFetching: action.isFetching
            };
        case 'CALLS_BY_FUNC_SUCCESS':
            return {
                ...state,
                isFetching: action.isFetching,
                data: action.data
            };
        case 'CALLS_BY_FUNC_ERROR':
            return {
                ...state,
                isFetching: action.isFetching,
                error: action.error
            };
        default:
            return state;
    }
};