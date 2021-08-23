import { useEffect, useState } from "react"
//import ProductList from "./ProductList"
import useFetch from "./useFetch"

const Home = () => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    const handleDelete = (id) => {
        fetch("http://localhost:8080/product/" + id, {
            method: "DELETE"
        }).then(() => fetchData())
    }

    const fetchData = () => {
        fetch("http://localhost:8080/product")
        .then(res => {
            if (!res.ok)
                throw Error("Server error!")
            return res.json()
        })
        .then(data => {
            setData(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            setError(err.message)
            setIsPending(false)
        })
    }

    const handleRefresh = () => {
        fetchData()
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    return (
        <div className="home">
            <button onClick={handleRefresh}>Refresh</button>
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {data && data.map(product => (
                <div key={product.id}>
                    <p>{product.id} - {product.name} - {product.price}</p>
                    {<button onClick={() => handleDelete(product.id)}>Delete</button>}
                </div>
            ))}
        </div>
    )
}
 
export default Home;