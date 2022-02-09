import React, { ReactNode } from 'react';
import Modal, { ModalTypeMap, ExtendModalUnstyled } from '@mui/material/Modal';

import { Container } from './styles';

interface MovieModalProps {
  open: boolean;

  onClose: (newValue: boolean) => void;
  children: Element | ReactNode;
}

const MovieModal: React.FC<MovieModalProps> = ({ open, children, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Container>{children}</Container>
    </Modal>
  );
};

export default MovieModal;
