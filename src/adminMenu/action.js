import { GET_REQUESTS, UPDATE_REQUESTS, ACCEPT_REQUEST, REJECT_REQUEST } from "./actionTypes";

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

export function acceptRequest(creatorId, subscriberId) {
    return {
        type: ACCEPT_REQUEST,
        payload: {
            creatorId,
            subscriberId
        }
    }
}

export function rejectRequest(creatorId, subscriberId) {
    return {
        type: REJECT_REQUEST,
        payload: {
            creatorId,
            subscriberId
        }
    }
}