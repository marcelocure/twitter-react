import React from 'react';

export default function({
    value,
    onChange
}) {
    return (
        <textarea onChange={onChange} value={value} />
    );
}