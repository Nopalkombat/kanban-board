/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Modal from 'react-modal';
import { useForm } from '../../hooks/useForm';
import { setStorageItem, getStorageItem } from '../../data/HandleLocalStorage';
import { GlobalContext } from '../App/App';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export function CardModal({ CardDetails }) {
  const { setCardsState } = useContext(GlobalContext);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { id, title, content, date, status } = CardDetails;
  const initialCard = {
    modalId: id,
    modalTitle: title,
    modalContent: content,
    modalDate: date,
    modalStatus: status,
  };
  const [values, handleInputChange] = useForm(initialCard);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    modifyData();
  }

  function modifyData() {
    let CardData = getStorageItem('CardData');
    // const currentCardIndex = CardData.filter((Card) => Card.id === CardDetails.id);
    const currentNotMyCard = CardData.filter((Card) => Card.id !== CardDetails.id);
    const currentCardContent = {
      id: values.modalId,
      title: values.modalTitle,
      content: values.modalContent,
      date: values.modalDate,
      status: values.modalStatus,
    };

    // CardData.splice(currentCardIndex, 1, currentCardContent);
    CardData = [...currentNotMyCard, currentCardContent];
    setStorageItem('CardData', CardData);
    setCardsState(getStorageItem('CardData'));
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <input
            name="modalTitle"
            type="text"
            value={values.modalTitle}
            onChange={handleInputChange}
          ></input>{' '}
          <br />
          <textarea
            name="modalContent"
            value={values.modalContent}
            onChange={handleInputChange}
          ></textarea>{' '}
          <br />
          <span name="modalDate" onChange={handleInputChange}>
            {values.modalDate}
          </span>{' '}
          <br />
          <span name="modalStatus" onChange={handleInputChange}>
            {values.modalStatus}
          </span>{' '}
          <br />
        </div>
      </Modal>
    </div>
  );
}
