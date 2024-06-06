import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Lorem Ipsum</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">Simply dummy landing page <span className="text-primary font-weight-medium">Name</span></h1>
              <p className="text-muted mb-4 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque neque nulla, malesuada et magna vel, consequat iaculis ex. Aenean laoreet diam vitae velit eleifend commodo. Ut rhoncus metus mollis metus viverra tristique. Aliquam efficitur nisl vitae nisi sagittis tristique. In nec enim vitae sem faucibus accumsan. In hac habitasse platea dictumst. Nam aliquam tempor sem, eu vehicula risus dignissim a. Cras in est elit. Ut in pulvinar metus.</p>
              <a href="#" className="btn btn-warning">
                Find Out How <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/images/Group Members.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;