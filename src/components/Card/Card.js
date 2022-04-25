/* eslint-disable react/prop-types */
import './Card.css';
import React from 'react';
import CardModal from '../CardModal/CardModal';

const Card = (props) => {
  // eslint-disable-next-line prettier/prettier
  // eslint-disable-next-line no-unused-vars
  const { title, content, date, status } = props;
  return (
    <div className="card">
      <p className="cardTitle">{title}</p>
      <p className="cardContent">
        {content.length > 100 ? content.substring(0, 100) + '...' : content}
      </p>
      <CardModal CardDetails={props} />
    </div>
  );
};

export default Card;
