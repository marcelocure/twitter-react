import React from 'react';

export default function({
    value,
    onChange,
    style
}) {
    return (
        <textarea onChange={onChange} value={value} style={style} cols="38" rows="5"/>
    );
}