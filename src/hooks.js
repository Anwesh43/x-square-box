import {useState, useEffect} from 'react'

const scGap = 0.02 
const delay = 20

export const useAnimatedScale = () => {
    const [animated, setAnimated] = useState(false)
    const [scale, setScale] = useState(0)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prevScale) => {
                        if (prevScale + scGap > 1) {
                            setScale(0)
                            setAnimated(false)
                            clearInterval(interval)
                        }
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
    })
    return {
        w, 
        h
    }
}

export const useStyle = (w, h, scale) => {
    const size = Math.min(w, h) / 10
    const position = 'absolute'
    const left = `${w / 2}px`
    const top = `${h / 2}px`
    const color = `indigo`
    
    const sf = Math.sin(Math.PI / 180 * scale)
    return {
        parentStyle() {
            return {
                left, 
                top,
                position 
            }
        },
        boxStyle() {
            const left = `${-size / 2}px`
            const top = `${-size / 2}px`
            const border = `2px solid ${color}`
            const width = `${size}px`
            const height = `${size}px`
            return {
                position, 
                width, 
                height, 
                top,
                left,
                border 
            }
        },
        lineStyle(i) {
            const left = `${-size / 2}px`
            const top = `0px`
            const background = color 
            const width = `${size}px`
            const height = `${size / 15}px`
            const WebkitTransform = `rotate(${45 * (1 - 2 * i) * sf}deg)`
            return {
                left,
                width,
                top, 
                height, 
                background, 
                WebkitTransform
            }
        }
    }
}