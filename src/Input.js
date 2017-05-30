import React from 'react';

export default function({
    placeholder,
    onClick,
    style
}) {
    return (
        <input type="text" placeholder={placeholder} onClick={onClick} style={style}/>
    );
}