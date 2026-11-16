import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../Redux/Slice/cartSlice'

function Cart() {

  const { cart } = useSelector(state => state.cartReducer)

  const dispatch = useDispatch()

  // Calculate total price
  const total = cart.reduce((sum, product) => sum + Number(product.price), 0)

  return (

    <div style={{ background: '#f5f6f5', minHeight: '100vh' }}>
      <div className="container py-4">
        <h2 className="fw-bold mb-2" style={{ color: '#315c43' }}>
          My Cart
        </h2>
        <p className="text-secondary mb-4">
          Your selected pre-loved finds.
        </p>

        <Row>
          {cart.length > 0 ? (
            <div>
              {cart.map(product => (
                <Col lg={3} md={4} sm={6} xs={12}
                  className="mb-4" key={product.id}>
                  <Card className="h-100 border-0 shadow-sm"
                    style={{
                      borderRadius: '12px',
                      overflow: 'hidden'
                    }}>

                    <Link to={`/view/${product.id}`}>
                      <Card.Img
                        src={product.images?.[0]}
                        style={{
                          height: '230px',
                          objectFit: 'cover'
                        }}
                      />
                    </Link>

                    <Card.Body>
                      <Card.Title style={{ color: '#315c43' }}>
                        {product.productName}
                      </Card.Title>
                      <h5 className="fw-bold">
                        ₹{product.price}
                      </h5>

                      <p className="text-secondary">
                        Size: {product.size}
                      </p>

                      <Button variant="danger" className="w-100" onClick={() => dispatch(removeFromCart(product.id))}>
                        Remove from Cart
                      </Button>
                    </Card.Body>

                  </Card>

                </Col>

              ))}

              <Col xs={12}>
                <Card className="border-0 shadow-sm p-3"
                  style={{ borderRadius: '12px' }}>
                  <h4 style={{ color: '#315c43' }}>
                    Cart Summary
                  </h4>
                  <p>
                    Total Products: {cart.length}
                  </p>
                  <h5 className="fw-bold">
                    Total Amount: ₹{total.toLocaleString('en-IN')}
                  </h5>
                  <Button className="border-0 mt-2" style={{ background: '#315c43' }} onClick={() => alert("Checkout successfull")}>
                    Proceed to Checkout
                  </Button>
                </Card>
              </Col>
            </div>

          ) : (

            <div className="text-center py-5">
              <i className="fa-solid fa-cart-shopping fa-3x mb-3"
                style={{ color: '#315c43' }}>
              </i>
              <h4 style={{ color: '#315c43' }}>
                Your Cart is Empty
              </h4>
              <p className="text-secondary">
                You haven't added any products yet.
              </p>
              <Link to="/allproduct"
                className="btn text-white"
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

export default Cart