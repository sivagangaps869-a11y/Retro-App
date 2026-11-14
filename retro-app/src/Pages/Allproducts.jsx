
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsAPI } from '../Services/allAPI'
import { setProducts } from '../Redux/Slice/productSlice'

function AllProducts() {

    const dispatch = useDispatch()

    const products = useSelector(
        state => state.productReducer.products
    )

    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('all')
    const [sort, setSort] = useState('recommended')
    const [wishlist, setWishlist] = useState([])
    const [loading, setLoading] = useState(false)

    // Fetch all products
    const fetchProducts = async () => {
        try {
            setLoading(true)

            const response = await getAllProductsAPI()

            dispatch(setProducts(response.data))

        } catch (error) {
            console.log(error)
            alert("Unable to load products")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    // Wishlist
    const toggleWishlist = (id) => {
        setWishlist(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        )
    }

    // Search and Category Filter
    let filteredProducts = products.filter(product => {

        const matchesSearch = product.productName
            ?.toLowerCase()
            .includes(search.toLowerCase())

        const matchesCategory =
            category === 'all' || product.category === category

        return matchesSearch && matchesCategory
    })

    // Sorting
    if (sort === 'low') {
        filteredProducts.sort(
            (a, b) => Number(a.price) - Number(b.price)
        )
    } else if (sort === 'high') {
        filteredProducts.sort(
            (a, b) => Number(b.price) - Number(a.price)
        )
    }

    return (
        <div className="container py-5">
            {/* Page Heading */}
            <div className="mb-4">
                <small className="text-secondary fw-semibold">
                    THE REWEAR COLLECTION
                </small>
                <h1 className="fw-bold mt-2">Explore </h1>

                <p className="text-muted">
                    Find something you love. Wear it your way.
                </p>

            </div>

            {/* Search Bar */}
            <div className="mb-4">

                <div className="input-group">

                    <span className="input-group-text bg-white">
                        <i className="bi bi-search"></i>
                    </span>

                    <input type="text"className="form-control"placeholder="Search clothes, styles..."value={search}onChange={(e) => setSearch(e.target.value)}/>
                </div>
            </div>

            {/* Category Filter */}
            <div className="mb-4">

                <h6 className="fw-bold mb-3">SHOP BY CATEGORY</h6>
                <div className="d-flex flex-wrap gap-2">

                    {[
                        { label: 'All Products', value: 'all' },
                        { label: 'Men', value: 'mens-clothing' },
                        { label: 'Women', value: 'womens-clothing' },
                        { label: 'Kids', value: 'kids-clothing' },
                        { label: 'Footwear', value: 'footwear' },
                        { label: 'Accessories', value: 'accessories' },
                        { label: 'Traditional Wear', value: 'traditional-wear' },
                        { label: 'Winter Wear', value: 'winter-wear' }
                    ].map(item => (

                        <button
                            key={item.value}
                            className={`btn btn-sm rounded-pill p-2 ${
                                category === item.value
                                    ? 'btn-dark'
                                    : 'btn-outline-dark'
                            }`}
                            onClick={() => setCategory(item.value)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products Heading and Sorting */}
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">

                <div>
                    <h4 className="fw-bold mb-1">Discover More</h4>

                    <small className="text-muted">
                        {filteredProducts.length} products available
                    </small>
                </div>

                <select className="form-select w-auto"value={sort}onChange={(e) => setSort(e.target.value)}>
                    <option value="recommended">Recommended</option>
                    <option value="low">Price: Low to High</option>
                    <option value="high">Price: High to Low</option>
                </select>
            </div>

            {/* Loading */}
            {loading && (
                <div className="text-center py-5">
                    <div className="spinner-border text-dark"></div>
                    <p className="mt-2 text-muted">Loading products...</p>
                </div>
            )}

            {/* Product Cards */}
            {!loading && (
                <div className="row g-4">
                    {filteredProducts.map(product => (
                        <div className="col-6 col-md-4 col-lg-3" key={product.id}>
                            <div className="card border-0 shadow-sm h-100">
                                {/* Product Image */}
                                <div className="position-relative">
                                    <img src={product.images?.[0] || 'https://placehold.co/400x500?text=No+Image'}
                                        alt={product.productName}className="card-img-top"style={{height: "270px",objectFit: "cover"}}/>

                                    {/* Wishlist Button */}
                                    <button
                                        className="btn btn-light rounded-circle position-absolute top-0 end-0 m-2"
                                        onClick={() => toggleWishlist(product.id)}
                                    >
                                        <i className={`bi ${wishlist.includes(product.id)? 'bi-heart-fill text-danger'
                                                : 'bi-heart'
                                        }`}></i>
                                    </button>

                                    {/* Condition */}
                                    <span className="badge bg-light text-dark position-absolute bottom-0 start-0 m-2">{product.condition}</span>

                                </div>

                                {/* Product Information */}
                                <div className="card-body">

                                    <small className="text-secondary text-uppercase">
                                        {product.category.replaceAll('-', ' ')}
                                    </small>

                                    <h6 className="fw-bold mt-2">{product.productName}</h6>

                                    <div className="d-flex align-items-center gap-2">

                                        <h5 className="fw-bold mb-0">
                                            ₹{Number(product.price).toLocaleString('en-IN')}
                                        </h5>

                                        <small className="text-muted text-decoration-line-through">
                                            ₹{Number(product.originalPrice).toLocaleString('en-IN')}
                                        </small>
                                    </div>

                                    <small className="text-muted d-block mt-2">Size: {product.size}</small>

                                    <button className="btn btn-dark w-100 mt-3">View Product</button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* No Products */}
                    {filteredProducts.length === 0 && (
                        <div className="col-12 text-center py-5">
                            <i className="bi bi-search fs-1 text-muted"></i>
                            <h5 className="mt-3">No products found</h5>
                            <p className="text-muted">Try another search or category.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default AllProducts
