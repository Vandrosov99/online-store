import React from "react";
import { Form, Col, Row, Button, Card } from "react-bootstrap";

const InfoList = props => {
  const { data, setPropertyList } = props;

  const removeInfoItem = number => {
    console.log("removeInfoItem ");

    const updatePropertyList = data.filter(dataItem => {
      return dataItem.number !== number;
    });

    console.log(updatePropertyList);
    setPropertyList([...updatePropertyList]);
  };

  return data.map(property => {
    return (
      <div className='mt-3'>
        <Form.Control
          placeholder='Введите название свойства'
          className='mt-1'
        />
        <Form.Control
          placeholder='Введите описание свойства'
          className='mt-1'
        />
        <Button
          className='w-100 mt-2'
          variant='outline-danger'
          onClick={() => removeInfoItem(property.number)}>
          Удалить свойство
        </Button>
      </div>
    );
  });
};

export default InfoList;
