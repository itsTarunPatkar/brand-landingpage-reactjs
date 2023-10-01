import React from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import insurance from "../img/life-insurance.png"
import part from "../img/partnership.png"
import trust from "../img/trust.png"
import con from "../img/401k.png"
import college from "../img/college.png"
import ProgressBar from './ProgressBar'


export default function Services() {

    const insurance_percentage = 80;
    const partnership_percentage = 75;
    const rollover_percentage = 90;
    const college_percentage = 50;
    const trust_percentage = 70;
    return (

        <Container id="services" className='pt-5' sty>
            <h1 className='text-white text-center pt-5 pb-5'>Services</h1>
            <Row className='d-flex justify-content-center'  >
                <Col className='mt-3' md={4} id='serviceCard'>
                    <Card style={{ '--bs-card-bg': 'none', backgroundColor: `#fff1`, '--clr': '#92176d' }} data-aos="fade-left" className='text-white '>
                        <Card.Img variant='top' src={insurance} />
                        <Card.Body>
                            <Card.Title className='text-center'>Life Insurance</Card.Title>
                            <Card.Text className='text-justify text-white '>
                                At its core, life insurance is a contract between you and an insurance company where you give them money (a premium), and if you were to pass away,
                                they would leave a set amount of money to whomever you choose (beneficiary). Or at least, that’s the definition.
                                The meaning of life insurance is something different for everyone. Your children’s tuition.
                                Your mortgage paid off. An inheritance to leave behind. People purchase life insurance for a number of reasons, all of which are important.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='mt-3' md={4}  >
                    <Card style={{ '--bs-card-bg': 'none', backgroundColor: `#fff1` }} data-aos="zoom-in" className='text-white '>
                        <Card.Img variant='top' src={part} />
                        <Card.Body>
                            <Card.Title className='text-center'>Business Partnership</Card.Title>
                            <Card.Text className='text-justify text-white'>
                                There are all sorts of important aspects of running a successful business such as high profits, customer satisfaction, and
                                technological development. You could argue that protection deserves a spot on that list, too.
                                Because no matter how successful your company is, one big event can bring it all crashing to the ground without the proper insurance as a safety net.
                                So is your business properly insured? Do you have any large coverage gaps to be concerned about? Are you getting the best price for your budget?
                                Let’s dive into all the ins and outs of business coverage and we can even connect you with an independent insurance agent.

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='mt-3' md={4}  >
                    <Card style={{ '--bs-card-bg': 'none', backgroundColor: `#fff1` }} data-aos="fade-right" className='text-white '>
                        <Card.Img variant='top' src={trust} />
                        <Card.Body>
                            <Card.Title className='text-center'>Will & Trust</Card.Title>
                            <Card.Text className='text-justify text-white'>
                                Life insurance trusts provide the policy owner with more control over the funds that are paid from the policy,
                                while also allowing you to reduce (and in some cases eliminate) estate taxes that would otherwise take money away from the funds you were leaving to your heirs.
                                Insurance trusts can reduce your estate taxes because the Insurance Trust owns the policies for you. This means
                                that your taxable income from the amount of your estate is lower, thereby reducing the taxes you will have to pay.                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='mt-3' md={4}  >
                    <Card style={{ '--bs-card-bg': 'none', backgroundColor: `#fff1` }} data-aos="fade-right" className='text-white '>
                        <Card.Img variant='top' src={college} />
                        <Card.Body>
                            <Card.Title className='text-center'>College Planning</Card.Title>
                            <Card.Text className='text-justify text-white'>
                                A college education may be the key to a better job for most Americans, but saving for college is daunting.
                                College comes at an alarmingly high cost these days. Clearly, most families need a long-term savings plan if they hope to help their
                                children avoid a mountain of student loan debt. For nearly three in 10 households, the method of choice is a tax-advantaged 529 plan. But permanent life insurance
                                , which has a tax-deferred savings component,
                                is a possibility too, as many insurance agents will eagerly tell you.

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='mt-3' md={4}  >
                    <Card style={{ '--bs-card-bg': 'none', backgroundColor: `#fff1` }} data-aos="fade-left" className='text-white '>
                        <Card.Img variant='top' src={con} />
                        <Card.Body>
                            <Card.Title className='text-center'>401k Rollover</Card.Title>
                            <Card.Text className='text-justify text-white'>
                                A 401(k) rollover is a process by which you can move your retirement savings from one 401(k) account to
                                another. This can be a great way to consolidate your retirement savings or to move your money into a better investment plan.
                                This guide will discuss how the 401(k) rollover works and what you need to do to complete it. We will also provide tips on choosing the rightIf you have an old 401(k),
                                457 or 403(b), it’s time to consider your options – including rolling over to a  investment plan for you!

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className='d-none mt-5 d-lg-flex '>
                <Col >
                    <ProgressBar text={"Insurance"} percent={insurance_percentage} />
                </Col>

                <Col >
                    <ProgressBar text={"Business Partnership"} percent={partnership_percentage} />
                </Col>

                <Col >
                    <ProgressBar text={"401K Rollover"} percent={rollover_percentage} />
                </Col>

                <Col >
                    <ProgressBar text={"College Planning"} percent={college_percentage} />
                </Col>
                <Col >
                    <ProgressBar text={"Trust & Will"} percent={trust_percentage} />
                </Col>
            </Row>


            <Row className=' d-flex justify-content-center mt-5 d-lg-none '>
                <Col xs={6} md={4} >
                    <ProgressBar text={"Insurance"} percent={insurance_percentage} />
                </Col>

                <Col xs={6} md={4} >
                    <ProgressBar text={"Business Partnership"} percent={partnership_percentage} />
                </Col>

                <Col xs={6} md={4} >
                    <ProgressBar text={"401K Rollover"} percent={rollover_percentage} />
                </Col>

                <Col xs={6} md={4} >
                    <ProgressBar text={"College Planning"} percent={college_percentage} />
                </Col>
                <Col xs={6} md={4} >
                    <ProgressBar text={"Trust & Will"} percent={trust_percentage} />
                </Col>
            </Row>


        </Container>
    )
}
