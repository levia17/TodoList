import { type } from "@testing-library/user-event/dist/type";

const UNCOMPLETELY_REMOVE = 'UN_REMOVE';
const COMPLETELY_REMOVE = 'COM_REMOVE';
const ADD = 'ADD';

const uncompletely_remove = (id) => {
    return {
        type: UNCOMPLETELY_REMOVE,
        id
    }
}

const completely_remove = (id) => {
    return {
        type: COMPLETELY_REMOVE,
        id
    }
}

const _add = (id)=>{
    return {
        type: ADD,
        id
    }
}

export { ADD ,COMPLETELY_REMOVE, UNCOMPLETELY_REMOVE, uncompletely_remove, _add, completely_remove};