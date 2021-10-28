import React from "react";
import InfoItem from "./InfoItem";

const InfoList = props => {
  const { data, setPropertyList } = props;

  const removeInfoItem = number => {
    const updatePropertyList = data.filter(dataItem => {
      return dataItem.number !== number;
    });

    setPropertyList([...updatePropertyList]);
  };

  return data.map(property => {
    const { number } = property;

    return (
      <InfoItem key={number} number={number} removeInfoItem={removeInfoItem} />
    );
  });
};

export default InfoList;
