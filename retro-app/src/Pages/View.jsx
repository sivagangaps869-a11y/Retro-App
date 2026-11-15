import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAllProductsAPI } from '../Services/allAPI'
import { addToCart } from '../Redux/Slice/cartSlice'

function View() {

  const { id } = useParams()
  const dispatch = useDispatch()
  const [product, setProduct] = useState(null)

  // Fetch selected product
  const fetchProduct = async () => {
    try {
      const response = await getAllProductsAPI()
      const selectedProduct = response.data.find(item => String(item.id) === String(id) )

      setProduct(selectedProduct)

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    fetchProduct()
  }, [id])

  // Add product to cart
  const handleAddToCart = () => {

    dispatch(addToCart(product))
    alert("Product added to cart!")
  }

  if (!product) {
    return (
      <div className="container text-center py-5">
        <h5>Loading product...</h5>
      </div>
    )
  }

  return (

    <div className="container py-5">
      <div className="row g-4">

        {/* Product Image */}
        <div className="col-md-6">

          <img
            src={product.images?.[0]}
            alt={product.productName}
            className="img-fluid rounded shadow-sm w-100"
            style={{
              height: '450px',
              objectFit: 'cover'
            }}
          />

        </div>

        {/* Product Details */}
        <div className="col-md-6">

          <small className="text-secondary text-uppercase">
            {product.category?.replaceAll('-', ' ')}
          </small>

          <h2 className="fw-bold mt-2">
            {product.productName}
          </h2>

          <h3 className="fw-bold mt-3" style={{ color: '#315c43' }}>
            ₹{product.price}
          </h3>

          <p className="text-muted text-decoration-line-through">
            ₹{product.originalPrice}
          </p>

          <hr />

          <h5>Product Description</h5>
          <p>{product.description}</p>
          <p><strong>Size:</strong> {product.size}</p>
          <p><strong>Condition:</strong> {product.condition}</p>
          <p><strong>Material:</strong> {product.material}</p>
          <button
            className="btn text-white mt-3 me-2"
            style={{ background: '#315c43' }}
            onClick={handleAddToCart}
          >
            <i className="fa-solid fa-cart-shopping me-2"></i>
            Add to Cart
          </button>

          <Link to="/allproduct" className="btn btn-outline-dark mt-3">Back to Products</Link>
        </div>
      </div>
    </div>
  )
}

export default View