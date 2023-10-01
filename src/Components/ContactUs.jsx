import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Player } from '@lottiefiles/react-lottie-player'
import Contactus from "../animations/ContactusAni.json"
import Form from 'react-bootstrap/Form'
import emailus from "../animations/EmailUs.json"
import call from '../animations/CallUs.json'


export default function ContactUs() {

  const [zipcode, setZipcode] = useState('')
  console.log(zipcode);
  return (
    <Container id='contactus'>
      <h1 className='text-center mt-5 mb-5'> Contact Us</h1>
        <Row className='pb-4 p-5'>

          <Col >
          <Card className='text-white pt-5' data-aos="fade-right" style={{ '--bs-card-bg': 'none', backgroundColor: `#fff1` }} >
              <Card.Body className='p-4 '>
                <Row>
                <Col md={6}>
                <h3>Email Us On:</h3>
                <p>info@bluelife.llc</p>
                </Col>

                <Col>
                <Player
                  autoplay
                  loop
                  src={emailus}
                  style={{ width: '50%' }}
                >
                </Player>
                </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card className='text-white pt-5' data-aos="fade-right" style={{ '--bs-card-bg': 'none', backgroundColor: `#fff1` }} >
              <Card.Body className='p-4'>
                <Row>
                <Col md={6} >
                <h3>Email Us On:</h3>
                <p>info@bluelife.llc</p>
                </Col>

                <Col>
                <Player
                  autoplay
                  loop
                  src={call}
                  style={{ width: '80%' }}
                >
                </Player>
                </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

        </Row>


      <Row>
        <Col xs={12}  md className='order-1 order-md-0'>


          <Row >

            <Form  >
              {/* Full Name */}
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='fs-5'>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Full Name Here" />
              </Form.Group>
            </Form>
            <Col >

              <Form>
                {/* Email address */}
                <Row>

                  <Col >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className='fs-5'>Email address</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                  </Col>

                  <Col >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className='fs-5'>Phone number</Form.Label>
                      <Form.Control type="text" placeholder="Enter Mobile number" />
                    </Form.Group>
                  </Col>

                </Row>

                {/* Address  */}

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className='fs-5'>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter permanent address" />
                </Form.Group>



                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className='fs-5'>Address line 1</Form.Label>
                  <Form.Control type="text" placeholder="Enter  address" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className='fs-5'>Address line 2</Form.Label>
                  <Form.Control type="text" placeholder="Enter  address" />
                </Form.Group>

                {/* country */}
                <Row>

                  <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className='fs-5'>Country</Form.Label>
                      <Form.Control type="text" placeholder="Enter your Country name" />
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className='fs-5'>State</Form.Label>
                      <Form.Control type="text" placeholder="Enter your State name" />
                    </Form.Group>
                  </Col>

                </Row>

                <Row>

                  <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className='fs-5'>City</Form.Label>
                      <Form.Control type="text" placeholder="Enter your City name" />
                    </Form.Group>
                  </Col>


                  <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className='fs-5'>Zipcode</Form.Label>
                      <Form.Control onChange={e => setZipcode(e.target.value)} type="text" placeholder="Enter Area Zipcode" />
                    </Form.Group>
                  </Col>

                </Row>
                {/* Service Selection */}


                <Row className='mb-3'>
                  <Col>
                    <Form.Label className='fs-5'>Check one or more Services </Form.Label>
                    <Form.Check
                      type={'checkbox'}
                      id={'college_planning'}
                      label={'College Planning'}
                    />

                    <Form.Check
                      type={'checkbox'}
                      id={'business_partnership'}
                      label={'Business PartnerShip'}
                    />

                    <Form.Check
                      type={'checkbox'}
                      id={'willntrust'}
                      label={'Wills & Trust'}
                    />

                    <Form.Check
                      type={'checkbox'}
                      id={'401k_rollover'}
                      label={'401K Rollover'}
                    />

                    <Form.Check
                      type={'checkbox'}
                      id={'Insurance'}
                      label={'Insurance'}
                    />
                  </Col>

                  {/* Comment And Messages  */}
                  <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label className='fs-5'>Comment Or Messages</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Row className='d-flex justify-content-end' >
                      <Button variant='outline-light ' className='px-5 py-2' href='#Aboutus' style={{ width: 'auto' }}>Submit</Button>
                    </Row>

                  </Col>

                </Row>
              </Form>
            </Col>
          </Row>

        </Col>

        <Col className='order-0 order-md-1'>
          <Player
            autoplay
            loop
            src={Contactus}
            style={{ width: '100%' }}
          >
          </Player>
        </Col>




      </Row>
    </Container>
  )
}
