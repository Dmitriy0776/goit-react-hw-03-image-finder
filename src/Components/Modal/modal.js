/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal.module.css';

const modal = ({ largeURL, closeModal }) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal}>
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
