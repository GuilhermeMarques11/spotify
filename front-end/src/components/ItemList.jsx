import React from 'react';
import styles from './ItemList.module.css';
import SingleItem from './SingleItem';
import { Link, useLocation } from 'react-router-dom';

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const finalItems = isHome ? items : Infinity;

  return (
    <div className={styles.itemList}>
      <div className={styles.itemList__header}>
        <h2>{title} populares</h2>
        {isHome ? (
          <Link className={styles.itemList__header__link} to={path}>
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.itemList__container}>
        {itemsArray
          .filter((_, index) => index < finalItems)
          .map((currentValue, index) => (
            <SingleItem {...currentValue} key={index} idPath={idPath} />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
