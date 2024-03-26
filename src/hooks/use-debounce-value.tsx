import { useEffect, useState } from "react";

export default function useDebounceValue<T = unknown>(value: T, delay: number){
    const [debouncedValue, setDevouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDevouncedValue(value)
        }, delay)
        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}