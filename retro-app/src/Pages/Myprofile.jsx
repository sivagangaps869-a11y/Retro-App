
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { getUsersAPI, updateProfileAPI } from '../Services/allAPI'

function Myprofile() {

  const user = useSelector(state => state.authReducer.currentUser)

  const [edit, setEdit] = useState(false)
  const [savedProfile, setSavedProfile] = useState({})
  const [profile, setProfile] = useState({
    name: '', email: '', phone: '', address: ''
  })

  // Fetch user details from JSON Server
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getUsersAPI()

        const currentUser = response.data.find(
          item => String(item.id) === String(user?.id)
        )

        if (currentUser) {
          const details = {
            name: currentUser.name || '',
            email: currentUser.email || '',
            phone: currentUser.phone || '',
            address: currentUser.address || ''
          }

          setProfile(details)
          setSavedProfile(details)
        }
      } catch (error) {
        alert('Unable to load profile')
      }
    }

    if (user?.id) fetchProfile()
  }, [user?.id])

  const change = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  // Save updated details
  const save = async () => {
    try {
      const response = await updateProfileAPI(user.id, {
        name: profile.name,
        phone: profile.phone,
        address: profile.address
      })

      const details = {
        name: response.data.name,
        email: response.data.email,
        phone: response.data.phone || '',
        address: response.data.address || ''
      }

      setProfile(details)
      setSavedProfile(details)

      localStorage.setItem('loggedUser', JSON.stringify({
        ...user,
        ...details
      }))

      setEdit(false)
      alert('Profile updated successfully!')
    } catch {
      alert('Profile update failed!')
    }
  }

  return (
    <div className="container-fluid p-4"
      style={{ background: '#f5f6f5', minHeight: '85vh' }}>

      <h3 className="fw-bold mb-4">My Account</h3>

      <Row className="g-4">

        {/* Sidebar */}
        <Col lg={3}>
          <Card className="p-3 border-0 shadow-sm">

            <h5>Hello, {profile.name}</h5>
            <hr />

            <small className="text-muted">MY ACCOUNT</small>

            <p className="bg-success-subtle text-success p-2 mt-3 rounded">
              Personal Information
            </p>

            <p>My Orders</p>

            <Link to="/wishlist" className="text-dark text-decoration-none mb-3">
              My Wishlist
            </Link>

          </Card>
        </Col>

        {/* Profile Details */}
        <Col lg={9}>
          <Card className="p-4 border-0 shadow-sm">

            <div className="d-flex justify-content-between mb-4">

              <div>
                <h5>Personal Information</h5>
                <small className="text-muted">
                  Manage your account details
                </small>
              </div>

              {!edit && (
                <Button variant="success" onClick={() => setEdit(true)}>
                  Edit Profile
                </Button>
              )}

            </div>

            <Row>
              {['name', 'email', 'phone', 'address'].map(field => (

                <Col md={6} className="mb-3" key={field}>

                  <Form.Label className="fw-semibold">
                    {field.toUpperCase()}
                  </Form.Label>

                  {edit && field !== 'email' ? (
                    <Form.Control
                      as={field === 'address' ? 'textarea' : 'input'}
                      name={field}
                      value={profile[field]}
                      onChange={change}
                      placeholder={`Enter ${field}`}
                    />
                  ) : (
                    <p className="p-3 rounded"
                      style={{ background: '#f5f7f5' }}>
                      {profile[field] || 'Not provided'}
                    </p>
                  )}

                </Col>
              ))}
            </Row>

            {edit && (
              <div className="text-end">

                <Button variant="light" className="me-2"
                  onClick={() => {
                    setProfile(savedProfile)
                    setEdit(false)
                  }}>
                  Cancel
                </Button>

                <Button variant="success" onClick={save}>
                  Save Changes
                </Button>

              </div>
            )}

          </Card>
        </Col>

      </Row>
    </div>
  )
}

export default Myprofile




