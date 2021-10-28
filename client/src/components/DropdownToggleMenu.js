import React from "react";
import { Dropdown } from "react-bootstrap";

const DropdownToggleMenu = props => {
  const { title, data } = props;

  return (
    <Dropdown className='w-auto'>
      <Dropdown.Toggle>{title}</Dropdown.Toggle>
      <Dropdown.Menu>
        {data.map(type => {
          const { name, id } = type;

          return <Dropdown.Item key={id}>{name}</Dropdown.Item>;
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownToggleMenu;
