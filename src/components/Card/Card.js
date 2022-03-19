/* eslint-disable react/prop-types */
import './Card.css';
import React from 'react';
import { CardModal } from '../CardModal/CardModal';

const Card = (props) => {
  // eslint-disable-next-line prettier/prettier
  const {title, content} = props;
  return (
    <>
      <div className="card">
        <div className="cardTitle">{title}</div>
        <div className="cardContent">{content}</div>
        <CardModal CardDetails={props} />
      </div>
    </>
  );
};

export default Card;

//handle click on Card
//open pop up with card information
//localstorage
