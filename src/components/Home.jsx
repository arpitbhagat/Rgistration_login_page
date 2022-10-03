import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {
  const getdata = (e)=>{
     console.log(e.target.value)
  }
  return (
    <>
      <div className='container mt-3'>
        <section className='d-flex justify-content-between'>
          <div className='left-data'>
            <h3>Sign Up</h3>
            <Form>
              <Form.Group className="mb-4 col" controlId="formBasicEmail">
                <Form.Control type="text" onChange={getdata} placeholder="Enter Your Name" />
              </Form.Group>
              <Form.Group className="mb-3 col" controlId="formBasicPassword">
                <Form.Control type="email" onchange={getdata} placeholder="Enter Email" />
              </Form.Group>

              <Form.Group className="mb-3 col" controlId="formBasicPassword">
                <Form.Control type="password" onchange={getdata} placeholder="Password" />
              </Form.Group>
              <p>Already have an account <span>Sign In</span></p>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  )
}
export default Home