import React, { useEffect } from "react";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import { Col, Container, Row } from "react-bootstrap";
import DeviceList from "../components/DeviceList";
import { useDispatch } from "react-redux";
import { fetchTypes } from "../http/deviceApi";
import { setTypes } from "../store/actions/index";

const ShopPage = () => {
  const dispatch = useDispatch();

  //services
  const getTypesFromServer = () => {
    fetchTypes().then(data =>
      dispatch(setTypes(data)).catch(e => {
        console.log("getTypesFromServer");
        console.log(e);
      })
    );
  };

  useEffect(() => {
    getTypesFromServer();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
