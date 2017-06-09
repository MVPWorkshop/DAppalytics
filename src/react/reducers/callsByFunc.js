export const callsByFunc = (state = {
    isFetching: false,
    data: [
        {date: '2017-05-23', name: 'doSomething', calls: 7},
        {date: '2017-05-23', name: 'doOtherThing', calls: 3},
        {date: '2017-05-24', name: 'doSomething', calls: 10},
        {date: '2017-05-24', name: 'doOtherThing', calls: 5}
    ],
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