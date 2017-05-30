export const ether_received_request = () => {
    return {
        type: 'ETHER_RECEIVED_REQUEST',
        isFetching: true
    }
};

export const ether_received_success = (data) => {
    return {
        type: 'ETHER_RECEIVED_SUCCESS',
        isFetching: false,
        data
    }
};

export const ether_received_error = (error) => {
    return {
        type: 'ETHER_RECEIVED_ERROR',
        isFetching: false,
        error
    }
};


//GET /api/etherReceived/<CONTRACT_ADDRESS>

export const etherReceived = (ethAddr) => {
    let config = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    };

    return dispatch => {
        dispatch(ether_received_request());

        return fetch(`/api/etherReceived/${ethAddr}`, config)
            .then(response => response.json())
            .then(data => ({ data, response }))
            .then(({ data, response }) => {
                if(!response.ok){
                    return dispatch(ether_received_error(data.error))
                }

                dispatch(ether_received_success())
            })
            .catch(err => dispatch(ether_received_error(err)))
    }
};

