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