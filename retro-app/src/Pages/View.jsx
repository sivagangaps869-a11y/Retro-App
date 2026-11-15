import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { getAllProductsAPI } from "../Services/allAPI";
import { addToCart } from "../Redux/Slice/cartSlice";

function View() {

    const { id } = useParams();
    const dispatch = useDispatch();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const getProduct = async () => {

            try {
                setLoading(true);
                setError("");

                const response = await getAllProductsAPI();

                const selectedProduct = response.data.find(
                    item => String(item.id) === String(id)
                );

                if (selectedProduct) {
                    setProduct(selectedProduct);
                } else {
                    setError("Product not found.");
                }

            } catch (err) {
                console.log(err);
                setError("Unable to load product details.");

            } finally {
                setLoading(false);
            }
        };

        getProduct();

    }, [id]);

    const handleAddToCart = () => {

        dispatch(addToCart(product));

        alert("Product added to cart!");
    };

    if (loading) {
        return <p className="text-center mt-5">Loading product...</p>;
    }

    if (error || !product) {
        return (
            <div className="container text-center mt-5">
                <h5>{error || "Product not found."}</h5>
                <Link to="/allproduct" className="btn btn-dark mt-3">
                    Back to Products
                </Link>
            </div>
        );
    }

    return (
        <div className="container mt-5 mb-5">

            <div className="row g-4">

                <div className="col-md-6">

                    <img
                        src={product.images?.[0]}
                        alt={product.productName}
                        className="img-fluid rounded shadow-sm w-100"
                        style={{
                            maxHeight: "500px",
                            objectFit: "contain"
                        }}
                    />

                    {product.images?.length > 1 && (
                        <div className="row g-2 mt-2">

                            {product.images.slice(1).map((image, index) => (

                                <div className="col-3" key={index}>
                                    <img
                                        src={image}
                                        alt={`${product.productName} ${index + 2}`}
                                        className="img-fluid rounded"
                                        style={{
                                            height: "100px",
                                            width: "100%",
                                            objectFit: "cover"
                                        }}
                                    />
                                </div>

                            ))}

                        </div>
                    )}

                </div>

                <div className="col-md-6">

                    <h2>{product.productName}</h2>

                    <h4 className="text-success mt-3">
                        ₹{product.price}
                    </h4>

                    {product.originalPrice && (
                        <p className="text-muted">
                            Original Price: ₹{product.originalPrice}
                        </p>
                    )}

                    <hr />

                    <p>
                        <strong>Description:</strong> {product.description}
                    </p>

                    <p>
                        <strong>Category:</strong> {product.category}
                    </p>

                    <p>
                        <strong>Size:</strong> {product.size}
                    </p>

                    <p>
                        <strong>Condition:</strong> {product.condition}
                    </p>

                    <p>
                        <strong>Material:</strong> {product.material}
                    </p>

                    <button
                        className="btn btn-dark mt-3 me-2"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>

                    <Link
                        to="/allproduct"
                        className="btn btn-outline-dark mt-3"
                    >
                        Back to Products
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default View;