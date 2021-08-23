const ProductList = ({products, handleDelete}) => {
    return (
        <div className="product-list">
            <div className="product-list">
                {products.map((product) => (
                    <div className="product-preview" key={product.id}>
                        <p>{product.id} - {product.name} - {product.price}</p>
                    {<button onClick={() => handleDelete(product.id)}>Delete</button>}
                    </div>
                ))}
            </div>
        </div>
    )
}
 
export default ProductList;