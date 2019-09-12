import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal.module.css';

const modal = ({ largeURL, closeModal }) => {
  return (
    <div class={styles.overlay} onClick={closeModal}>
      <div class={styles.modal}>
        <img src={largeURL} alt="imgLarge" />
      </div>
    </div>
  );
};

modal.propTypes = {
  largeURL: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default modal;
