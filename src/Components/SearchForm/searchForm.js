import React from 'react';
import PropTypes from 'prop-types';
import styles from './searchForm.module.css';

const searchForm = ({ onSubmitForm, onChangeInput, inputSearch }) => {
  return (
    <form className={styles.search_form} onSubmit={onSubmitForm}>
      <input
        onChange={onChangeInput}
        value={inputSearch}
        type="text"
        autoComplete="off"
        placeholder="Search images..."
      />
    </form>
  );
};

searchForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
};

export default searchForm;
