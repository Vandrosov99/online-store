import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalButton = props => {
  const { buttonText, titleText, children, onSaveClick } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='primary' className='mt-4 p-2' onClick={handleShow}>
        {buttonText}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{titleText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>{children}</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger' onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant='outline-success' onClick={onSaveClick}>
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalButton;