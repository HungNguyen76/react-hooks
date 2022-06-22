import { SET_JOB, ADD_JOB, DELETE_JOB } from "./constants"

export const setJob = payload => { //payload là dũ liệu mang theo đi
    return {
        type: SET_JOB,
        payload
    }
}
export const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}
export const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}