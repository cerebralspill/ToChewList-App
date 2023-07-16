import React, { useState } from "react";

interface item {
    id: number;
    text: string;
    completed: boolean;
}

export const ToChewList: React.FC = () => {
    const [tochews,setTochews] = useState<item[]>([
        { id: 1, text: "Make pancakes", completed: false },
        { id: 2, text: "Scramble eggs", completed: false }
    ]);

    const  [input, setInput] = useState<string>("");

    const handleToggle = (id:number) => {
        setTochews(
            tochews.map((tochew) => {
                if(tochew.id === id) {
                    return { ...tochew, completed: !tochew.completed }
                }
                return tochew;
            })
        )
    }

    const handleClick = () => {
        const newTochew: item = { id: Date.now(), text:input, completed: false };
        setTochews([...tochews, newTochew]);
    };
    return (
        <div className="main-container">
            <h1>ToChewList</h1>;
            <ul>
                {tochews.map((tochew) => (
                    <li key={tochew.id} onClick={() => handleToggle(tochew.id)}>
                    {tochew.text}
                    </li>
                ))}
            </ul>
        <input type="text" placeholder="Add tochew item" onChange={(e)=> setInput(e.currentTarget.value)}/>
        <button onClick={handleClick}>Add</button>
        </div>
    );
};