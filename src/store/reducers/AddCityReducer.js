export default function (state = [], action) {
    switch (action.type) {
        case "ADD_CITY":
            return (
                [...state, action.payload]
            );
            break;

        default:
            return state;
            break;
    }
}
