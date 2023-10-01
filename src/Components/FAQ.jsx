import { Player } from '@lottiefiles/react-lottie-player';
import { Col, Container, Row } from 'react-bootstrap';
import Faq from "react-faq-component";
import Ani1 from "../animations/FAQani.json"
import Ani2 from "../animations/FAQani2.json"
import 'aos/dist/aos.css';


const data = {

    rows: [
        {
            title: "What types of insurance are essential for starting a business?",
            content: ` Answer:  For businesses, the most crucial insurance coverage to consider is liability insurance. It is especially important for protecting your business against potential lawsuits and legal costs. At Blue Life LLC, we understand the significance of liability insurance and can guide you in finding the right coverage to safeguard your business interests.`,
        },
        {
            title: "Does liability insurance cover all potential legal costs for my business?",
            content:
                "Answer: Liability insurance is designed to provide coverage for legal costs arising from lawsuits against your business. However, it's essential to review the specific terms and conditions of your policy. At Blue Life LLC, our experienced insurance agents can help you navigate through the details of your liability insurance and ensure that you have comprehensive coverage tailored to your business needs.",
        },
        {
            title: "Will my car insurance policy cover scratches on my vehicle?",
            content: `Answer: Car insurance policies typically focus on providing coverage for damages resulting from accidents or specific events. However, coverage for scratches may vary depending on your policy. At Blue Life LLC, we have knowledgeable insurance agents who can review your car insurance policy and help you understand the extent of coverage for scratches or advise you on additional coverage options that best suit your requirements.`,
        },
        {
            title: "Are there any additional insurance options I should consider for my car?",
            content: `Answer: In addition to standard car insurance, it's worth considering comprehensive coverage and other policies that offer protection against non-collision-related damages, such as vandalism, theft, or weather-related incidents. At Blue Life LLC, our dedicated insurance agents can provide you with a range of suitable options to enhance the protection of your vehicle.`,
        },
        {
            title: "What can I expect when consulting with an independent insurance agent?",
            content: `Answer: When you consult with an independent insurance agent, like those at Blue Life LLC, you can expect personalized guidance tailored to your specific needs. Our agents have in-depth knowledge of insurance products and will assist you in finding the ideal coverage options from various insurance companies. We prioritize your satisfaction and aim to provide the best insurance solutions for your unique circumstances.`,
        },
        {
            title: "How can I reach out to an independent insurance agent?",
            content: `Answer: To get in touch with our dedicated independent insurance agents at Blue Life LLC, you can contact our agency by phone or visit our office. Additionally, we offer convenient online platforms and websites where you can submit inquiries or request a consultation, making it easier for you to connect with us.`,
        },
        {
            title: "Will an independent insurance agent be able to address all my insurance-related questions?",
            content: `Answer: Yes, our experienced independent insurance agents at Blue Life LLC have extensive knowledge of insurance matters. They can address a wide range of insurance-related questions, including coverage options, policy terms, claims processes, and more. We are here to provide you with expert guidance and ensure that you have the necessary information to make informed decisions about your insurance needs.`,
        },
    ],
};

const styles = {
    bgColor: 'transparent',
    titleTextColor: "#f5f2fd",
    rowTitleColor: "#f5f2fd",
    rowContentColor: 'grey',
    arrowColor: "#f5f2fd",
    fontFamily: 'Josefin Sans'
};

const config = {
    // animate: true,
    arrowIcon: "+",
    tabFocus: true,
    expandIcon: "+",
    collapseIcon: "-",
};

export default function DisplayElem() {
    return (
        <Container className='mt-5'>

            <h1 className='text text-center pt-5 mb-5'>Frequently <span style={{color:'hsla(295, 42%, 54%, 1)'}}>Asked</span> Questions </h1>

            <Row >
                <Col xs={12}  md data-aos="fade-right" >
                    <Faq
                        data={data}
                        styles={styles}
                        config={config}
                    />
                </Col>

                <Col data-aos="fade-left" >
                    <Row mt-0>

                        <Player
                            autoplay
                            loop
                            src={Ani2}
                            style={{ width: '50%' }}
                        >
                        </Player>
                        <Player
                            autoplay
                            loop
                            src={Ani1}
                            style={{ width: '50%' }}
                        >
                        </Player>




                    </Row>
                </Col>
            </Row>

        </Container>
    )
}
