/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../Card/Card';
import './StatusColumn.css';

// eslint-disable-next-line react/prop-types
const StatusColumn = ({ title, cards }) => {
  // eslint-disable-next-line prettier/prettier
  return (
    <div className="statusColumn">
      <h3>{title}</h3>
      {cards.map((cardContent) => (
        <Card key={cardContent.id} {...cardContent} />
      ))}
    </div>
  );
};

export default StatusColumn;
