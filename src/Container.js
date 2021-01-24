import {useAnimatedScale, useDimension} from './hooks'
import React from 'react'
import XSquareBox from './XSquareBox'

const Container = (props) => {
    const {scale, start} = useAnimatedScale()
    const {w, h} = useDimensio()
    return (
        <div>
            <XSquareBox 
                w = {w} h = {h} scale = {scale} onClick = {start}
            ></XSquareBox>
        </div>
    )
}

export default Container 