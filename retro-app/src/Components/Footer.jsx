import React from 'react'

function Footer() {
  return (
    <footer
      className="container-fluid text-light py-4"
      style={{ backgroundColor: '#2d5330' }}
    >
      <div className="container">

        <div className="row gy-4">

          {/* Brand */}
          <div className="col-md-4">
            <h4 className="fw-bold">ReWear</h4>
            <p className="small mb-0 opacity-75">
              Buy • Sell • Reuse • Rewear
              <br />
              Give clothes a second life.
            </p>
          </div>

          {/* Shopping */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Shopping</h6>
            <p className="mb-2">
              <a href="/products" className="text-light text-decoration-none">
                Shop All
              </a>
            </p>
            <p className="mb-2">
              <a href="/sell" className="text-light text-decoration-none">
                Sell Clothes
              </a>
            </p>
            <p className="mb-0">
              <a href="/wishlist" className="text-light text-decoration-none">
                Wishlist
              </a>
            </p>
          </div>

          
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Help & Support</h6>
            <p className="mb-2">Contact Us</p>
            <p className="mb-2">FAQs</p>
            <p className="mb-0">Privacy Policy</p>
          </div>

        </div>

        <hr className="border-light opacity-25 my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">

          <p className="small mb-0 opacity-75">
            © 2026 ReWear. All Rights Reserved.
          </p>

          <p className="small mb-0 opacity-75">
            Sustainable Fashion. Better Future.
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer