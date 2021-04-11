import React from 'react';
import got from '../../img/got.jpeg';
const style = {
    width: '100%'
}

function ErrorMes() {
    return (
        <span>
            Somthing wrong
            <img src={got} alt="l" style={style}/>
        </span>
    )
}

export default ErrorMes;