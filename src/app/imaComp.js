import React from 'react';

function ImgComp({src}) {
    

    let imgStyles = {
        width: 100 + '%',
        height: 'auto',
        position: 'absolute',
        margin: 'auto',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
    return <img src={src} alt="slide-img" style={imgStyles}></img>
}

export default ImgComp;