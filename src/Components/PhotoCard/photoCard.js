import React from 'react';
import PropTypes from 'prop-types';
import styles from './photoCard.module.css';

const photoCard = ({
  id,
  webformatURL,
  largeImageURL,
  openModal,
  likes,
  views,
  comments,
  downloads,
}) => {
  return (
    <li key={id} className={styles.gallery_item}>
      <div className={styles.photo_card}>
        <img src={webformatURL} alt="imghere" />
        <div className={styles.stats}>
          <p className={styles.stats_item}>
            <i className="material-icons">thumb_up</i>
            {likes}
          </p>
          <p className={styles.stats_item}>
            <i className="material-icons">visibility</i>
            {views}
          </p>
          <p className={styles.stats_item}>
            <i className="material-icons">comment</i>
            {comments}
          </p>
          <p className={styles.stats_item}>
            <i className="material-icons">cloud_download</i>
            {downloads}
          </p>
        </div>
        <button
          onClick={() => openModal(largeImageURL)}
          type="button"
          className={styles.fullscreen_button}
        >
          <i className="material-icons" style={{ pointerEvents: 'none' }}>
            zoom_out_map
          </i>
        </button>
      </div>
    </li>
  );
};

photoCard.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default photoCard;
