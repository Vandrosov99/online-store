import React, { useState } from "react";
import { connect } from "react-redux";

import { Container, Form, Button, Row } from "react-bootstrap";
import ModalButton from "../components/ModalButton";
import { makeBrands, makeTypes } from "../store/selectors";
import { createStructuredSelector } from "reselect";
import DropdownToggleMenu from "../components/DropdownToggleMenu";
import InfoList from "../components/InfoList";

const mapStateToProps = createStructuredSelector({
  TYPES: makeTypes(),
  BRANDS: makeBrands(),
});

const AdminPage = props => {
  const { TYPES, BRANDS } = props;
  const [propertyList, setPropertyList] = useState([]);

  const addProperty = () => {
    setPropertyList([
      ...propertyList,
      {
        title: "",
        description: "",
        number: Date.now(),
      },
    ]);
  };

  return (
    <Container className='d-flex flex-column'>
      <ModalButton
        titleText='Модальное окно с добавлением типа'
        buttonText='добавить тип'>
        <Form.Control placeholder='добавить тип...' />
      </ModalButton>
      <ModalButton
        titleText='Модальное окно с добавлением бренда'
        buttonText='добавить бренд'>
        <Form.Control placeholder='добавить бренд...' />
      </ModalButton>
      <ModalButton
        titleText='Модальное окно с добавлением устройства'
        buttonText='добавить устройство'>
        <Row className='justify-content-center'>
          <DropdownToggleMenu title={"Выберите тип"} data={TYPES.types} />
          <DropdownToggleMenu title={"Выберите бренд"} data={BRANDS.brands} />
        </Row>

        <Form.Control
          placeholder='Введите название устройства'
          className='mt-3'
        />
        <Form.Control
          placeholder='Введите стоимость устройства'
          className='mt-3'
          type='number'
        />
        <Form.Control className='mt-3' type='file' />
        <Button
          variant='outline-dark'
          className='mt-2 w-100'
          onClick={addProperty}>
          Добавить новое свойство
        </Button>
        <InfoList data={propertyList} setPropertyList={setPropertyList} />
      </ModalButton>
    </Container>
  );
};

export default connect(mapStateToProps)(AdminPage);
