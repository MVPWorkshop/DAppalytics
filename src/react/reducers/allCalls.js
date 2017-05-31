export const allCalls = (state = {
    isFetching: false,
    data: [
        {date: "2017-05-23", calls: 10},
        {date: "2017-05-24", calls: 15},
        {date: "2017-05-25", calls: 12},
        {date: "2017-05-26", calls: 22},
        {date: "2017-05-27", calls: 115}
    ],
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