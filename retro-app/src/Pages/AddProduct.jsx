import React, { useState } from 'react'
import { uploadImageAPI } from '../Services/cloudinaryAPI'
import { addProductAPI } from '../Services/allAPI'
import { useDispatch } from 'react-redux'
import { addProduct } from '../Redux/Slice/productSlice'

function AddProduct() {
const [images, setImages] = useState([])
const dispatch = useDispatch()

const handleImageChange = (e) => {
  const selectedFiles = Array.from(e.target.files)

  const remainingSlots = 10 - images.length
  const newFiles = selectedFiles.slice(0, remainingSlots)

  const newImages = newFiles.map(file => ({
    file,
    preview: URL.createObjectURL(file)
  }))

  setImages(prev => [...prev, ...newImages])

  e.target.value = null
}

const removeImage = (index) => {
  URL.revokeObjectURL(images[index].preview)

  setImages(prev => prev.filter((_, i) => i !== index))
}


const handleSubmit = async (e) => {
  e.preventDefault()

  if (images.length === 0) {
    alert("Please upload at least one product image.")
    return
  }

  try {
    const imageUrls = []

    // Upload images to Cloudinary
    for (const image of images) {
      const url = await uploadImageAPI(image.file)
      imageUrls.push(url)
    }

    const productData = {
      productName: e.target.pname.value,
      description: e.target.pdesc.value,
      price: e.target.price.value,
      category: e.target.category.value,
      size: e.target.size.value,
      condition: e.target.condition.value,
      material: e.target.material.value,
      originalPrice: e.target.ogPrice.value,
      images: imageUrls
    }

const response = await addProductAPI(productData)
dispatch(addProduct(response.data))

e.target.reset()
setImages([])

alert("Product added successfully!")

  } catch (error) {
    console.log(error)
    alert("Failed to add product. Please try again.")
  }
}

  return (
    <div className="container py-5">

      {/* Page Heading */}
      <div className="mb-4">
        <h2 className="fw-bold">Add Your Product</h2>
        <p className="text-muted">
          Share something you love with the Retro community.
        </p>
      </div>

      {/* Product Form */}
      <div className="card shadow-sm border-0">
        <div className="card-body p-4">

          <h5 className="fw-bold mb-4">Product Information</h5>

          <form onSubmit={handleSubmit}>

            {/* Product Name */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Product Name
              </label>
              <input id='pname'
                type="text"
                className="form-control"
                placeholder="Enter product name"
                required
              />
            </div>

            {/* Description */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Description
              </label>
              <textarea id='pdesc'
                className="form-control"
                rows="4"
                placeholder="Describe your product..."
                required
              ></textarea>
            </div>

            {/* Price and Category */}
            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">
                  Price (₹)
                </label>
                <input id='price'
                  type="number"
                  className="form-control"
                  placeholder="Enter price"
                  min="0"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">
                  Category
                </label>
               <select className="form-select" id='category' required>
  <option value="">Select category</option>
  <option value="mens-clothing">Men's Clothing</option>
  <option value="womens-clothing">Women's Clothing</option>
  <option value="kids-clothing">Kids' Clothing</option>
  <option value="footwear">Footwear</option>
  <option value="accessories">Accessories</option>
  <option value="traditional-wear">Traditional Wear</option>
  <option value="winter-wear">Winter Wear</option>
</select>
              </div>

            </div>
 <div className="row">

  {/* Size */}
  <div className="col-md-6 mb-3">
    <label className="form-label fw-semibold">Size</label>
    <select className="form-select" id='size' required>
      <option value="">Select size</option>
      <option>XS</option>
      <option>S</option>
      <option>M</option>
      <option>L</option>
      <option>XL</option>
      <option>XXL</option>
      <option>Free Size</option>
    </select>
  </div>

  {/* Condition */}
  <div className="col-md-6 mb-3">
    <label className="form-label fw-semibold">Condition</label>
    <select className="form-select" id='condition' required>
      <option value="">Select condition</option>
      <option>New</option>
      <option>Excellent</option>
      <option>Good</option>
      <option>Decent</option>
    </select>
  </div>

</div>
 <div className="row">
{/* Material */}
<div className="col-md-6 mb-3">
  <label htmlFor="material" className="form-label fw-semibold">
    Material
  </label>

  <select className="form-select" id="material" name="material" required>
    <option value="">Select material</option>
    <option value="cotton">Cotton</option>
    <option value="denim">Denim</option>
    <option value="polyester">Polyester</option>
    <option value="linen">Linen</option>
    <option value="wool">Wool</option>
    <option value="silk">Silk</option>
    <option value="other">Other</option>
  </select>
</div>
{/* Original Price */}
<div className="col-md-6 mb-3">
  <label htmlFor="originalPrice" className="form-label fw-semibold">
    Original Price (₹)
  </label>

  <input
    type="number"
    className="form-control"
    id="ogPrice"
    name="originalPrice"
    placeholder="Enter original price"
    min="0"
    required
  />
</div>
</div>

{/* Product Images */}
<div className="mb-4">

  <label className="form-label fw-semibold">
    Product Images
  </label>

  <input
    id="productImages"
    type="file"
    className="form-control"
    accept="image/*"
    multiple
    onChange={handleImageChange}
    disabled={images.length >= 10}
  />

  <small className="text-muted">
    Upload up to 10 images ({images.length}/10 selected)
  </small>

  {/* Image Preview */}
  <div className="d-flex flex-wrap gap-3 mt-3">

    {images.map((image, index) => (
      <div
        key={index}
        className="position-relative"
        style={{ width: "120px", height: "120px" }}
      >

        <img
          src={image.preview}
          alt={`Product ${index + 1}`}
          className="rounded"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

        <button
          type="button"
          className="btn btn-danger btn-sm position-absolute top-0 end-0 rounded-circle"
          onClick={() => removeImage(index)}
          style={{
            transform: "translate(40%, -40%)",
            width: "26px",
            height: "26px",
            padding: 0
          }}
        >
          ×
        </button>

      </div>
    ))}

  </div>

</div>

            {/* Submit Button */}
            <div className="d-flex justify-content-end">
              <button
                type="submit"
                className="btn btn-dark px-4"
              >
                Add Product
              </button>
            </div>

          </form>

        </div>
      </div>

    </div>
  )
}

export default AddProduct
