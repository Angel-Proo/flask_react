import React from 'react';

export const Card = ({listOfTodos}) =>{
    return(
        <>
        {listOfTodos.map(todo =>{
            return(
                <ul>
                    <li>{todo.content}</li>
                </ul>
            )
        })}
        </>
    )
}