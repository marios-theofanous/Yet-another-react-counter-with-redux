export function reset(state) {
    return {
        type: 'RESET',
        state
    }
}

export function increment(state) {
    return {
        type: 'INCREMENT',
        state
    }
}

export function decrement(state) {
    return {
        type: 'DECREMENT',
        state
    }
}