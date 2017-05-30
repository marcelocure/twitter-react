import React from 'react';

export default function({
    src,
    width,
    height,
    rounded,
    valign
}) {
    const style = {
        width,
        height,
        "vertical-align": valign
    };

    return (
        <img src={src} style={style}/>
    );
}