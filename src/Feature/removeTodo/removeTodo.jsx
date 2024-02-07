import { useReducer } from "react";


import reducer from "./reducer";

function removeTodo(){
    const [state, dispatch] = useReducer(reducer);


    return useReducer(reducer);
}

console.log(removeTodo);