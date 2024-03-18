import React,{useState, useEffect} from "react";
import { Card } from "../Card/card.js";

export const TodoPages = () =>{
    const [todo, setTodo] =  useState([])

    useEffect(() => {
        fetch('/api').then(respuesta =>{
                if(respuesta.ok){
                    return respuesta.json()
                }
            }).then(datos => setTodo(datos))
    },[])

    return(
        <>
            <Card listOfTodos={todo}></Card>
        </>
    )
}