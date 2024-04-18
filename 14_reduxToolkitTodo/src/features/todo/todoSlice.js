import {createSlice, nanoid} from '@reduxjs/toolkit'



const initialState = {
    todos: [{id:1, text: "hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // the function in reducers will always get acces to 2 things state and action. state gives access to the current state of our initial state[In RTK, the state refers to the current snapshot of your application's data.]. while actions describe the changes that need to be made to that state.
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(), 
                text: action.payload // [payload is an object so if we enter multiple value in payload we can acces it with .]
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo : (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? todo.text = action.payload.text : todo)
        }
    }
})


export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;


export default todoSlice.reducer;