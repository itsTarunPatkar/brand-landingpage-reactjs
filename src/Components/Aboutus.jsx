import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Ani1 from "../animations/aboutAni.json"
import { Player } from '@lottiefiles/react-lottie-player'
import AniValues from '../animations/aniValues2.json';
import AniMission from '../animations/aniValues3.json'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'



export default function Aboutus() {
    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, [])
    return (
        <Container className='pt-5' id="Aboutus" style={{ minHeight: '100dvh' }}>
            <h1 className='text-white text-center pt-5'>About Us</h1>
            <Row className='mt-3 '>
                <Col md={6}>

                    <p data-aos="fade-right" className='text-center text-white p-5' style={{ fontFamily: 'Josefin Sans', fontSize: '25px', overflow: 'hidden', '--bs-card-bg': 'none' }}>
                        "sss is a leading independent firm partnered with HGI to offer exceptional financial solutions. Our expertise lies in securing families’
                        financial futures through offerings such as term and permanent life insurance, 401k rollovers, annuities, college planning, and wills and trusts.
                        With our exclusive partnerships with top insurers, such as North American, AIG, Fidelity & Guarantee, Athene, and several more, we
                        provide our clients access to the best options and personalized service to meet their specific financial goals."

                    </p>


                </Col>

                <Col data-aos="fade-left">
                    <Player
                        autoplay
                        loop
                        src={Ani1}
                        style={{ width: '90%' }}
                    >
                    </Player>
                </Col>
            </Row>






            <Row className='mt-5 '>
                <Card className='text-white' data-aos="fade-right" style={{ '--bs-card-bg': 'none', backgroundColor: `#fff1`, backgroundSize: `cover`, backgroundPosition: `center` }} >
                    <Card.Body className='p-5'>
                        <Row>
                            <Col className=''>
                                <Player
                                    autoplay
                                    loop
                                    src={AniMission}
                                    style={{ width: '50%' }}
                                >
                                </Player>
                            </Col>
                            <Col md={6} className='d-flex justify-content-center flex-column' >
                                <h3 className='fw-bold fs-2'>
                                    Our Mission
                                </h3>
                                <p className='fs-4'>
                                    Bluelife's mission is to provide a trusted platform where independent agents and online insurance shoppers can make a meaningful connection that leads to financial growth and security. Trust is at the heart of everything we do, and that's why we always put it first.
                                </p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
            <Row className='mt-5 '>
                <Card className='text-white' data-aos="fade-left" style={{ '--bs-card-bg': 'none', backgroundColor: `#fff1` }} >
                    <Card.Body className='p-5'>
                        <Row>
                            <Col md={6} className='d-flex justify-content-center flex-column' >
                                <h3 className='fw-bold fs-2'>
                                    Our Values
                                </h3>
                                <p className='fs-4'>
                                    For the agent, trust means delivering the leadership and service their business turns to. Learn more about joining our IA network. For the customer, trust means delivering the human touch and expertise they can rely on to find the answers they need.
                                </p>
                            </Col>
                            <Col>
                                <Player
                                    autoplay
                                    loop
                                    src={AniValues}
                                    style={{ width: '50%' }}
                                >
                                </Player>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>


        </Container>
    )
}
