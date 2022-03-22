/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './StatusColumn.css';
import { getStorageItem } from '../../data/HandleLocalStorage';

// eslint-disable-next-line react/prop-types
const StatusColumn = ({ title }) => {
  const [cardsState, setCardsState] = useState([]);

  useEffect(() => {
    const CardData = getStorageItem('CardData');
    setCardsState(
      CardData.filter((cardInfo) => cardInfo.status === title.toLowerCase().replace(' ', ''))
    );
  }, []);

  // eslint-disable-next-line prettier/prettier
  return (
    <div className="statusColumn">
      <h3>{title}</h3>
      {cardsState.map((cardContent, id) => (
        <Card key={id} {...cardContent}/>
      ))}
    </div>
  );
};

export default StatusColumn;
