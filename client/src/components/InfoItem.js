import React from "react";
import { Form, Button } from "react-bootstrap";

const InfoItem = props => {
  const { number, removeInfoItem } = props;

  return (
    <div className='mt-3'>
      <Form.Control placeholder='Введите название свойства' className='mt-1' />
      <Form.Control placeholder='Введите описание свойства' className='mt-1' />
      <Button
        className='w-100 mt-2'
        variant='outline-danger'
        onClick={() => removeInfoItem(number)}>
        Удалить свойство
      </Button>
    </div>
  );
};

export default InfoItem;
