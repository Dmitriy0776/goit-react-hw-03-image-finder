import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/photoCard';
import styles from './gallery.module.css';
import shortid from 'shortid';

const gallery = ({ imagesArr, onClickBtn, openModal }) => {
  return (
    <>
      <ul className={styles.gallery}>
        {imagesArr.map(
          ({
            id,
            webformatURL,
            largeImageURL,
            likes,
            views,
            comments,
            downloads,
          }) => (
            <PhotoCard
              key={shortid.generate()}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              likes={likes}
              views={views}
              comments={comments}
              downloads={downloads}
              openModal={openModal}
            />
          ),
        )}
      </ul>
      <button type="button" onClick={onClickBtn} className={styles.button}>
        Load more
      </button>
    </>
  );
};

gallery.propTypes = {
  imagesArr: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      argeImageURL: PropTypes.string.isRequired,
      ikes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onClickBtn: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default gallery;
