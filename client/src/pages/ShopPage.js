import React from "react";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import { Col, Container, Row } from "react-bootstrap";
import DeviceList from "../components/DeviceList";

const ShopPage = () => {
  return (
    <Container>
      <Row className='mt-2'>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
};

export default ShopPage;
