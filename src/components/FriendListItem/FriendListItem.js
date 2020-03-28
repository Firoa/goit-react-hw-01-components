import React from 'react';
import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, id, isOnline }) => {
  let statusStyle = [styles.status];
  isOnline && statusStyle.push(styles.statusIsOnline);
  return (
    <li key={id} className={styles.listItem}>
      <span className={statusStyle.join(' ')}></span>
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
