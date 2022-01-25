import React from 'react'
 const axios = require('axios')
// import React, { useState } from 'react';

function Mycolor() {

  
    const hello = () => {
    
        axios.get('"https://dapi.kakao.com/v2/search/web?sort=accuracy&page=1&size=1&query=%EB%AF%B8%EC%9B%80%EB%B0%9B%EC%9D%84+%EC%9A%A9%EA%B8%B0"',
        { header: { "Accept": "application/json","Authorization": "KakaoAK 6d89912785d7f47c3d841bc69527f77a"}}
        )
        .then(result => console.log(result))
    
    
    }
    return (
        <div>
            <h1>MyColor</h1>
            <button onClick = {hello}>hi</button>
        </div>
    )
}

export default Mycolor
