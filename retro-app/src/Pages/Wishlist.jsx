
import React from 'react'

import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../Redux/Slice/wishlistSlice'
 import { addToCart } from '../Redux/Slice/cartSlice'

function Wishlist() {

  const { wishlist } = useSelector(state => state.wishlistReducer)
  console.log("Wishlist Page Data:", wishlist)
  const dispatch = useDispatch()

   const handleCart = (product) => {
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }

  return (
    <div style={{ background: '#f5f6f5', minHeight: '100vh' }}>
  

      <div className="container py-4" >

        <h2 className="fw-bold mb-2" style={{ color: '#315c43' }}>
          My Wishlist
        </h2>

        <p className="text-secondary mb-4">
          Your favourite finds, saved in one place.
        </p>

        <Row>
          {wishlist.length > 0 ? wishlist.map(product => (

            <Col lg={3} md={4} sm={6} xs={12}
              className="mb-4" key={product.id}>

              <Card className="h-100 border-0 shadow-sm"
                style={{ borderRadius: '12px', overflow: 'hidden' }}>

                <Link to={`/view/${product.id}`}>
                  <Card.Img
                    src={product.images?.[0]}
                    style={{ height: '230px', objectFit: 'cover' }}
                  />
                </Link>

                <Card.Body>

                  <div className="d-flex justify-content-between">
                    <Card.Title style={{ color: '#315c43' }}>
                      {product.productName}
                    </Card.Title>

                    <Button variant="light"
                      onClick={() => dispatch(removeFromWishlist(product.id))}>
                      <i className="fa-solid fa-heart text-danger"></i>
                    </Button>
                  </div>

                  <h5 className="fw-bold">₹{product.price}</h5>

                  <Button
                    className="w-100 mt-2 border-0"
                    style={{ background: '#315c43' }}
                    onClick={() => handleCart(product)}>
                    <i className="fa-solid fa-cart-shopping me-2"></i>
                    Add to Cart
                  </Button> 

                </Card.Body>
              </Card>
            </Col>

          )) : (

            <div className="text-center py-5">
              <i className="fa-regular fa-heart fa-3x mb-3"
                style={{ color: '#315c43' }}></i>

              <h4 style={{ color: '#315c43' }}>
                Your Wishlist is Empty
              </h4>

              <p className="text-secondary">
                You haven't saved any products yet.
              </p>

              <Link to="/" className="btn text-white"
                style={{ background: '#315c43' }}>
                Continue Shopping
              </Link>
            </div>

          )}
        </Row>
      </div>
    </div>
  )
}

export default Wishlist
