import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import WebFont from 'webfontloader';

WebFont.load({
    google:{
        families:['Oswald', 'sans-serif']
    }
})
ReactDOM.render(<App/>,document.getElementById('blockChainCabs'))
