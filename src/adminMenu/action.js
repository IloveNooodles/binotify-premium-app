import { GET_REQUESTS, UPDATE_REQUESTS, ACCEPT_REQUEST, DESICION_REQUEST_FAILED } from "./actionTypes";

export function getRequests(limit, page) {
    return {
        type: GET_REQUESTS,
        payload: {
            limit,
            page
        }
    }
}

export function updateRequests(requests) {
    return {
        type: UPDATE_REQUESTS,
        payload: requests
    }
}

export function acceptRequest(singer_id, subscription_id) {
    return {
        type: ACCEPT_REQUEST,
        payload: {
            singer_id,
            subscription_id,
            status: 'ACCEPTED'
        }
    }
}

export function rejectRequest(singer_id, subscription_id) {
    return {
        type: ACCEPT_REQUEST,
        payload: {
            singer_id,
            subscription_id,
            status: 'REJECTED'
        }
    }
}

export function desicionRequestFailed(message, error_code) {
    return {
        type: DESICION_REQUEST_FAILED,
        payload: {
            message,
            error_code
        }
    }
}