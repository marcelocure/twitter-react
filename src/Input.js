import React from 'react';

export default function({
    placeholder,
    onClick
}) {
    return (
        <input type="text" placeholder={placeholder} onClick={onClick}/>
    );
}