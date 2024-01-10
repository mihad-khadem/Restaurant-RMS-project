import { useEffect, useState } from "react"

// Custom Hook for extract menu data from api/database
export const useMenu = () => {
    const [menu, setMenu] = useState([])
    // Loading state
    const [loading, setLoading] = useState(true)


    // Using effect to fetch menu data
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            setMenu(data)
            setLoading(false)
        })
    }, [])
    return [menu, loading];

}
