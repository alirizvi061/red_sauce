import React from 'react';
import { useHistory, Link } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <a href="/home">Home</a>
            <a href="/about">about</a>
            <a href="/profile">profile</a>
        </div>
    )
}

export default Navigation;