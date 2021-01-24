import React from 'react'
import {useStyle} from './hooks'

const Line = (i, styleCb) => (<div style = {styleCb(i)}></div>)

const XSquareBox = ({scale, w, h, onClick}) => {
    const { parentStyle, lineStyle, boxStyle } = useStyle(w, h, scale)
    return (
        <div onClick = {onClick} style = {parentStyle()}>
            <div style = {boxStyle()}></div>
            {[0, 1].map((i) => (<Line styleCb = {lineStyle} i = {i} key = {`line_${i}`}/>))}
        </div>
    )

}

export default XSquareBox