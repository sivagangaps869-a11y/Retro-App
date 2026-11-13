
import React, { useState } from 'react'
import rewearlogo from "../assets/rewear-logo.png"

function Header() {

  const [showProfile, setShowProfile] = useState(false)

  return (

    <nav className="navbar navbar-dark shadow sticky-top py-3"
      style={{ backgroundColor: "#2d5330" }}>

      <div className="container-fluid px-4 d-flex flex-wrap align-items-center">

        {/* Logo */}
       <a className="navbar-brand me-4" href="/">
  <img
    src={rewearlogo}
    alt="ReWear Logo"
    style={{ width: "170px", height: "auto" }}
  />
</a>

        {/* Navigation Links */}
        <ul className="navbar-nav flex-row align-items-center gap-3 mx-auto">

          <li className="nav-item">
            <a className="nav-link active rounded px-3"
              href="/"
              style={{ backgroundColor: "#087c42" }}>
              <i className="bi bi-house-fill me-2"></i>
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link px-3" href="/seller">
              <i className="bi bi-tag-fill me-2"></i>
              Sell Clothes
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link px-3" href="/my-ads">
              <i className="bi bi-briefcase-fill me-2"></i>
              My Ads
            </a>
          </li>
             
                <div className="d-flex align-items-center">
                    <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Search clothes..."
                         />

                 <button className="btn btn-success">
                  <i className="bi bi-search"></i>
                  </button>
                  </div>
        </ul>

        {/* Profile Dropdown */}
        <div className="position-relative">

          <button
            type="button"
            className="btn text-white"
            onClick={() => setShowProfile(!showProfile)}
          >
            <i className="bi bi-person-circle fs-4"></i>
            <i className="bi bi-chevron-down ms-2"></i>
          </button>

          {showProfile && (

            <ul className="dropdown-menu dropdown-menu-end show mt-2 shadow"
              style={{ position: "absolute", right: 0, minWidth: "160px" }}>

                    

              <li>
                <a className="dropdown-item" href="/profile">
                  <i className="bi bi-person-fill me-2"></i>
                  My Profile
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="/wishlist">
                  <i className="bi bi-heart-fill me-2"></i>
                  My Wishlist
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="/cart">
                  <i className="bi bi-cart-fill me-2"></i>
                  My Cart
                </a>
              </li>

              <li><hr className="dropdown-divider" /></li>

              <li>
                <button
                  className="dropdown-item text-danger"
                  type="button"
                  onClick={() => setShowProfile(false)}
                >
                  <i className="bi bi-box-arrow-right me-2"></i>
                  Logout
                </button>
              </li>

            </ul>

          )}

        </div>

      </div>
    </nav>
  )
}

export default Header
