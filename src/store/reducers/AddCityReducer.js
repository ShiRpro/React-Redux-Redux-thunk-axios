export default function (state = [], action) {
    switch (action.type) {
        case "ADD_CITY":
            return (
                [...state.filter(item => item.name !== action.payload.name), action.payload]
            );
            break;

        default:
            return state;
            break;
    }
}
