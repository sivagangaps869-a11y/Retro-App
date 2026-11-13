import React from 'react'
import qualityImage from '../assets/quality.jpg'
import dealsImage from '../assets/deals.jpg'
import shoppingImage from '../assets/shopping.jpg'
import checkoutImage from '../assets/checkout.jpg'
import heroImage from '../assets/hero.png'
import menImage from '../assets/men.jpg'
import womenImage from '../assets/women.jpg'
import kidsImage from '../assets/kids.jpg'
function Home() {
  return (
    <>
  
    {/* Hero session */}
    <section className='container-fluid bg-light p-0 position-relative'>
       <img src={heroImage} alt="Sustainable Fashion" className=' d-block w-100 object-fit-cover 'style={{height:"800px"
       }}  />
     
      <div className= ' position-absolute top-50 translate-middle-y text-dark '
      style={{left:"12%",width:"45%"}}>
       
          <h1 className='display-5 fw-bold '>Give Clothes a <span className='text-success'>
            Second Life</span></h1>
            <h5 className='mt-3 fs-5 text-dark fw-bold d-flex align-items-center gap-3'>Buy <span className='text-success fs-4'>.</span>{""}Sell 
            <span className='text-success fs-4'>.</span>{""}Reuse <span className='text-success fs-4'>
              .</span>{""} Rewear</h5>
            <p className='fs-5 mt-3' >Discover affordable pre-loved fashion.Buy and sell clothes while making
              a positive difference to our planet.
            </p>
            <a href="/products" className='btn btn-success btn-lg mt-3 px-4'>Shop Now</a>

        </div>
        </section>

   {/* Benefits Section */}

<section className="container-fluid py-5" style={{backgroundColor: '#fbf5eb'}}>
  <div className="container">

    <div className="row g-12">

      {/* Quality Clothes */}
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
          <img
            src={qualityImage}
            alt="Quality Clothes"
            className="w-100"
            style={{height: '160px', objectFit: 'cover'}}
          />
          <div className="card-body text-center">
            <h5 className="fw-bold">Quality Clothes</h5>
            <p className="text-muted small mb-0">
              Find styles worth wearing again.
            </p>
          </div>
        </div>
      </div>

      {/* Great Deals */}
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
          <img
            src={dealsImage}
            alt="Great Deals"
            className="w-100"
            style={{height: '160px', objectFit: 'cover'}}
          />
          <div className="card-body text-center">
            <h5 className="fw-bold">Great Deals</h5>
            <p className="text-muted small mb-0">
              Fashion at better prices.
            </p>
          </div>
        </div>
      </div>

      {/* Easy Shopping */}
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
          <img
            src={shoppingImage}
            alt="Easy Shopping"
            className="w-100"
            style={{height: '160px', objectFit: 'cover'}}
          />
          <div className="card-body text-center">
            <h5 className="fw-bold">Easy Shopping</h5>
            <p className="text-muted small mb-0">
              Discover your favourite looks.
            </p>
          </div>
        </div>
      </div>

      {/* Secure Checkout */}
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
          <img
            src={checkoutImage}
            alt="Secure Checkout"
            className="w-100"
            style={{height: '160px', width:"100%", objectFit: 'contain'}}
          />
          <div className="card-body text-center">
            <h5 className="fw-bold">Secure Checkout</h5>
            <p className="text-muted small mb-0">
              A smooth shopping experience.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
      
{/* Shop by Category  */}

<section
  className="container-fluid py-5 pb-5"
  style={{ backgroundColor: '#f8edd8' }}
>
  <div className="container">

    <h2 className="text-center fw-bold mb-2">
      Shop by <span className="text-success">Category</span>
    </h2>

    <p className="text-center text-muted mb-5">
      Explore pre-loved fashion for everyone
    </p>

    <div className="row g-6">

      {/* Men */}
      <div className="col-12 col-md-4">
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">

          <img
            src={menImage}
            alt="Men's Fashion"
            className="w-100"
            style={{
              height: '260px',
              objectFit: 'cover'
            }}
          />

          <div className="card-body d-flex justify-content-between align-items-center p-4">
            <h4 className="fw-bold mb-0">Men</h4>
            <a
              href="/products?category=men"
              className="text-success fw-semibold text-decoration-none"
            >
              Explore Collection →
            </a>
          </div>

        </div>
      </div>

      {/* Women */}
      <div className="col-12 col-md-4">
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">

          <img
            src={womenImage}
            alt="Women's Fashion"
            className="w-100"
            style={{
              height: '260px',
              objectFit: 'cover'
            }}
          />

          <div className="card-body d-flex justify-content-between align-items-center p-4">
            <h4 className="fw-bold mb-0">Women</h4>
            <a
              href="/products?category=women"
              className="text-success fw-semibold text-decoration-none"
            >
              Explore Collection →
            </a>
          </div>

        </div>
      </div>

      {/* Kids */}
      <div className="col-12 col-md-4">
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">

          <img
            src={kidsImage}
            alt="Kids' Fashion"
            className="w-100"
            style={{
              height: '260px',
              objectFit: 'cover'
            }}
          />

          <div className="card-body d-flex justify-content-between align-items-center p-4">
            <h4 className="fw-bold mb-0">Kids</h4>
            <a
              href="/products?category=kids"
              className="text-success fw-semibold text-decoration-none"
            >
              Explore Collection →
            </a>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
    
      
        
      

     
 
    </>
  )
}

export default Home
