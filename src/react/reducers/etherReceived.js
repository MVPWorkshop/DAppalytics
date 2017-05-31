export const etherReceived = (state = {
    isFetching: false,
    data: [
        {date: '2017-05-23', etherReceived: 5.32},
        {date: '2017-05-24', etherReceived: 6.12},
        {date: '2017-05-25', etherReceived: 3.42},
        {date: '2017-05-26', etherReceived: 12.53},
        {date: '2017-05-27', etherReceived: 1.12},
        {date: '2017-05-28', etherReceived: 6.69}
    ],
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