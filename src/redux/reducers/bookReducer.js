const initialState = [
    {
    id: 0,
    name: "Ali and Simbi",
    author: "Abel Okoh",
    number: 1234567890,
},
{
    id: 1,
    name: "Boss Baby",
    author: "Nath Andre",
    number: 1234567890,
}
];

//We are about to create an action for the button click to add books
const bookReducer = (state= initialState, action) => {
    switch (action.type){
        case "ADD_BOOK":
            state = [...state, action.payload];
            return state;
        case "UPDATE_BOOK":
        const updateState = state.map((book) => book.id === action.payload.id? action.payload : book);
        state = updateState;
        return state;
        case "DELETE_BOOK":
            const filterBooks = state.filter(book=> book.id !== action.payload && book);
            state = filterBooks;
            return state;
        default: 
        return state;

    }

};
export default bookReducer;