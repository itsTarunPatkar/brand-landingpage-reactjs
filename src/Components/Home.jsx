import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Player } from '@lottiefiles/react-lottie-player'
import headAni from "../animations/NewWave.json"


export default function Home() {
  return (
    <>
      <div className="headeranimation " style={{opacity: '0.5'}}>
      <Player
       className='headanimation'
        autoplay
        loop
        src={headAni}
        style={{ width: '100dvw', zIndex:-1, marginBottom:'0px'}}
      >
      </Player>
      </div>
      <Container  className='d-md-flex align-items-center justify-content-center pt-3 ;' style={{ gap:'30px' }}>

        <Row id='heading' className=' text-white fw-bold text-center'>
          <div  className="display-4 fw-bold" style={{zIndex:1}}>
            Committed to <span id='home-page-span'  style={{ color: 'hsla(295, 42%, 54%, 1)' }}></span> service and ongoing support for all
          </div>
          <p className='fs-4 mt-5'>
            At Brand, we offer multiple options from top-notch companies like North American, AIG, and Athene, to ensure that you receive the optimal product to meet your unique needs.
          </p>
          <div className="d-flex justify-content-center mt-5">
            <Button variant='outline-light ' className='px-5 py-2' href='#Aboutus' style={{ width: 'auto' }}>More About US </Button>
          </div>
        </Row>
      </Container>
    </>
  )
}
