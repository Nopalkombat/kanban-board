/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useForm } from '../../hooks/useForm';
import { setStorageItem, getStorageItem } from '../../data/HandleLocalStorage';
import { GlobalContext } from '../App/App';

const CardModal = ({ CardDetails }) => {
  const [open, setOpen] = useState(false);

  const { setCardsState } = useContext(GlobalContext);
  const [values, handleInputChange] = useForm(CardDetails);

  function modifyData() {
    const CardData = getStorageItem('CardData');
    const currentNotMyCard = CardData.filter((Card) => Card.id !== CardDetails.id);
    const currentCardContent = { ...values };

    const newCardData = [...currentNotMyCard, currentCardContent];
    setStorageItem('CardData', newCardData);
    setCardsState(getStorageItem('CardData'));
  }

  function handleDelete() {
    const CardData = getStorageItem('CardData');
    const currentNotMyCard = CardData.filter((Card) => Card.id !== CardDetails.id);
    setStorageItem('CardData', currentNotMyCard);
    setCardsState(getStorageItem('CardData'));
  }

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
    modifyData();
  };

  return (
    <div>
      <button onClick={onOpenModal}>Open modal</button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
        <div>
          <span>ElementID: {values.id}</span>
          <br />
          <input
            name="id"
            type="text"
            value={values.title}
            onChange={handleInputChange}
          ></input>{' '}
          <br />
          <textarea
            name="content"
            value={values.content}
            onChange={handleInputChange}
          ></textarea>{' '}
          <br />
          <span name="date" onChange={handleInputChange}>
            {values.date}
          </span>{' '}
          <br />
          <select name="status" value={values.status} onChange={handleInputChange}>
            <option value="backlog">Backlog</option>
            <option value="todo">To do</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <br />
          <button onClick={handleDelete}> Delte Card</button>
        </div>
      </Modal>
    </div>
  );
};

export default CardModal;
