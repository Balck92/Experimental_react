export default function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            console.log("STATE HAS NOW INCREASED", state);
            return state + 1
        case 'INCREMENT_IF_ODD':
            return (state % 2 !== 0) ? state + 1 : state
        case 'DECREMENT':
            console.log("STATE HAS NOW DECREASED", state);
            return state - 1
        default:

            return state
    }
}
