export const all_calls_request = () => {
    return {
        type: "ALL_CALLS_REQUEST",
        isFetching: true
    }
};

export const all_calls_success = (data) => {
    return {
        type: "ALL_CALLS_SUCCESS",
        isFetching: false,
        data
    }
};

export const all_calls_error = (error) => {
    return {
        type: "ALL_CALLS_ERROR",
        isFetching: false,
        error
    }
};

// response : [ {date: 2017-05-23, calls: 10}, {date: 2017-05-24, calls: 15} ]
export const allCalls = (ethAddr) => {
    let config = {
        method: "GET",
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        }
    };

    return dispatch => {
        dispatch(all_calls_request());

        return fetch(`/api/allContractCalls/${ethAddr}`, config)
            .then(response => response.json()
            .then(data => ({ data, response })))
            .then(({ data, response }) =>  {
                if (!response.ok) {
                     return dispatch(all_calls_error(data.message));
                }

                dispatch(all_calls_success())
            })
            .catch(err => dispatch(all_calls_error(err)));
    }
};