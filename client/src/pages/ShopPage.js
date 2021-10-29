import React, { useEffect } from "react";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import { Col, Container, Row } from "react-bootstrap";
import DeviceList from "../components/DeviceList";
import { useDispatch } from "react-redux";
import { setTypes, setBrands, setDevices } from "../store/actions/index";
import httpService from "../services/httpService";

const ShopPage = () => {
  const dispatch = useDispatch();

  const getTypesFromServer = async () => {
    const types = await httpService.getTypesFromServer();

    dispatch(setTypes(types));
  };

  const getBrandsFromServer = async () => {
    const brands = await httpService.getBrandsFromServer();

    dispatch(setBrands(brands));
  };

  const getDevicesFromServer = async () => {
    const devices = await httpService.getDevicesFromServer();

    dispatch(setDevices(devices.rows));
  };

  useEffect(() => {
    getTypesFromServer();
    getBrandsFromServer();
    getDevicesFromServer();
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
