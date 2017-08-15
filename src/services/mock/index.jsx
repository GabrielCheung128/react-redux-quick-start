import { getBasicUrl, getRequestHeader } from 'Services/lib';

export function post(route, data) {
    return {
        done: (callback) => {
            callback(data)
        }
    }
}

export function fetch(route, queryObject = {}) {
    return {
        done: (callback) => {
            callback([])
        }
    }
}

export function update(route, data) {
    return {
        done: (callback) => {
            callback(data)
        }
    }
}

export function destroy(route, data){
    return {
        done: (callback) => {
            callback(data)
        }
    }
}