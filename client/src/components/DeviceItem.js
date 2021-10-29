import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import starImg from "../assets/device/mini_star.png";
import { useHistory } from "react-router";
import { DEVICE_ROUTE } from "../const/routeKeys";

const DeviceItem = props => {
  const { device } = props;
  const { img, rating, name, id } = device;
  const history = useHistory();

  const onDeviceClick = () => {
    history.push(DEVICE_ROUTE + "/" + id);
  };

  return (
    <Col md={3} className='mt-3'>
      <Card
        style={{ width: 150, cursor: "pointer" }}
        border={"light"}
        className='p-2'
        onClick={onDeviceClick}>
        <Image
          width={"100%"}
          height={120}
          src={process.env.REACT_APP_API_URL + img}
        />
        <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
          <div>Samsung</div>
          <div className='d-flex align-items-center'>
            <div>{rating}</div>
            <Image src={starImg} />
          </div>
        </div>
        <div>{name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
