import React, { useState } from "react";

export const ToChewList = () => {
    return <div className="main-container">
        <h1>ToChewList</h1>;
        <ul>
            <li>item 1</li>
            <li>item 2</li>
        </ul>
        <input type="text" placeholder="Add tochew item" />
        <button>Add</button>
        </div>;
};