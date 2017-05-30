export const calls_by_func_request = () => {
    return {
        type: 'CALLS_BY_FUNC_REQUEST',
        isFetching: true
    }
};

export const calls_by_func_success = (data) => {
    return {
        type: 'CALLS_BY_FUNC_SUCCESS',
        isFetching: false,
        data
    }
};

export const calls_by_func_error = (error) => {
    return {
        type: 'CALLS_BY_FUNC_ERROR',
        isFetching: false,
        error
    }
};

// example response : [
// {date: 2017-05-23, function: 'doSomething', calls: 7},
// {date: 2017-05-23, function: 'doOtherThing', calls: 3},
// {date: 2017-05-24, function: 'doSomething', calls: 10},
// {date: 2017-05-24, function: 'doOtherThing', calls: 5}
// ]

export const callsByFunc = (ethAddr) => {
    let config = {
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    };

    return dispatch => {
        dispatch(calls_by_func_request());

        return fetch(`/api/contractCallsByFunction/${ethAddr}`, config)
            .then(response => response.json())
            .then(data => ({ data, response }))
            .then(({ data, response }) => {
                if(!response.ok){
                    return dispatch(calls_by_func_error(data.error));
                }

                dispatch(calls_by_func_success());
            })
            .catch(err => dispatch(calls_by_func_error(err)))
    }
};