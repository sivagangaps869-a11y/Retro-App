import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
    removeFromCart,
    clearCart
} from "../Redux/Slice/cartSlice";

function Cart() {

    const dispatch = useDispatch();

    const cart = useSelector(
        state => state.cartReducer.cart
    );

    const totalPrice = cart.reduce(
        (total, product) => total + Number(product.price || 0),
        0
    );

    return (
        <div className="container mt-5 mb-5">

            <h2 className="text-center mb-4">My Cart</h2>

            {cart.length === 0 ? (

                <div className="text-center mt-5">
                    <h5>Your cart is empty.</h5>

                    <Link to="/allproduct" className="btn btn-dark mt-3">
                        Continue Shopping
                    </Link>
                </div>

            ) : (

                <>
                    <div className="row g-4">

                        <div className="col-lg-8">

                            {cart.map(product => (

                                <div
                                    className="card mb-3 shadow-sm"
                                    key={product.id}
                                >

                                    <div className="row g-0">

                                        <div className="col-md-4">

                                            <img
                                                src={product.images?.[0]}
                                                className="img-fluid rounded-start w-100"
                                                alt={product.productName}
                                                style={{
                                                    height: "200px",
                                                    objectFit: "cover"
                                                }}
                                            />

                                        </div>

                                        <div className="col-md-8">

                                            <div className="card-body">

                                                <h5>{product.productName}</h5>

                                                <p>₹{product.price}</p>

                                                <p className="text-muted">
                                                    Size: {product.size}
                                                </p>

                                                <button
                                                    className="btn btn-outline-danger"
                                                    onClick={() =>
                                                        dispatch(removeFromCart(product.id))
                                                    }
                                                >
                                                    Remove
                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                        <div className="col-lg-4">

                            <div className="card shadow-sm p-3">

                                <h4>Order Summary</h4>

                                <hr />

                                <p>
                                    Total Products: {cart.length}
                                </p>

                                <h5>
                                    Total Amount: ₹{totalPrice}
                                </h5>

                                <button
                                    className="btn btn-outline-danger mt-3"
                                    onClick={() => dispatch(clearCart())}
                                >
                                    Clear Cart
                                </button>

                                <button
                                    className="btn btn-dark mt-2"
                                    onClick={() =>
                                        alert("Checkout functionality will be added later.")
                                    }
                                >
                                    Proceed to Checkout
                                </button>

                            </div>

                        </div>

                    </div>
                </>

            )}

        </div>
    );
}

export default Cart;