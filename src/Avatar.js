import React from 'react';

export default function({
    src,
    width,
    height,
    rounded,
}) {
    const style = {
        width,
        height,
    };

    return (
        <img src={src} style={style} />
    );
}