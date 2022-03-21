/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../Card/Card';
import './StatusColumn.css';
import { getStorageItem } from '../../data/HandleLocalStorage';

// eslint-disable-next-line react/prop-types
const StatusColumn = ({ title }) => {
  const CardData = getStorageItem('CardData');
  const CardInfo = CardData.filter(
    (cardInfo) => cardInfo.status === title.toLowerCase().replace(' ', '')
  );
  // eslint-disable-next-line prettier/prettier
  return (
    <div className="statusColumn">
      <h3>{title}</h3>
      {CardInfo.map((cardContent, id) => (
        <Card key={id} {...cardContent} />
      ))}
    </div>
  );
};

export default StatusColumn;
