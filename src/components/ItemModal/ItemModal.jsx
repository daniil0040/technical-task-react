import Modal from 'react-modal';
import { CloseModalBtn, ModalContainer } from './ItemModal.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: ' 24px',
    padding: '0',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export const ItemModal = ({ modalIsOpen, closeModal, children }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalContainer>
          <CloseModalBtn onClick={closeModal}>✕</CloseModalBtn>
          {children}
        </ModalContainer>
      </Modal>
    </div>
  );
};
