import { useEffect } from "react"
import { useState } from "react"

const useProducts = () => {
    const [filteredPd, setFilteredPd] = useState([]);
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setFilteredPd(data)
            })
    }, [])
    return [products, filteredPd, setFilteredPd];
}

export default useProducts;