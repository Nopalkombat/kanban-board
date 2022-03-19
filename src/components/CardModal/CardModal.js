/* eslint-disable react/prop-types */
import React from 'react';
import Modal from 'react-modal';
import { useForm } from '../../hooks/useForm';

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
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { title, content, date, status } = CardDetails;
  const initialCard = {
    modalTitle: title,
    modalContent: content,
    modalDate: date,
    modalStatus: status,
  };
  const [values, handleInputChange] = useForm(initialCard);
  console.table(values);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
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
