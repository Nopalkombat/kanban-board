/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useForm } from '../../hooks/useForm';
import { setStorageItem, getStorageItem } from '../../data/HandleLocalStorage';
import { GlobalContext } from '../App/App';
import './CardModal.css';

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
      <a href="!#" onClick={onOpenModal}></a>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>{values.title.length > 50 ? values.title.substring(0, 50) + '...' : values.title}</h2>
        <div className="cardInfo">
          <input name="title" type="text" value={values.title} onChange={handleInputChange}></input>{' '}
          <textarea name="content" value={values.content} onChange={handleInputChange}></textarea>{' '}
          <select name="status" value={values.status} onChange={handleInputChange}>
            <option value="backlog">Backlog</option>
            <option value="todo">To do</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <button onClick={handleDelete}> Delete Card</button>
        </div>
      </Modal>
    </div>
  );
};

export default CardModal;
