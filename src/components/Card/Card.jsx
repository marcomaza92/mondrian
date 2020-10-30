import { useState, useEffect } from 'react';
import classNames from 'classnames';

import img01 from '../../assets/image01.jpg';
import img02 from '../../assets/image02.jpg';
import img03 from '../../assets/image03.jpg';

import styles from './Card.module.scss';

const cardContent = [
  {
    id: 0,
    imageUrl: img01,
    quoteText: 'El amor es algo tan hermoso que solo irradia felicidad'
  },
  {
    id: 1,
    imageUrl: img02,
    quoteText: 'A veces solo necesitamos un beso para poder seguir'
  },
  {
    id: 2,
    imageUrl: img03,
    quoteText: 'Yo no quiero una vida con vos, vos sos mi vida y te quiero a vos'
  },
];

const Card = () => {
  const timeLapse = 5000;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrentSlide(currentSlide !== cardContent.length - 1 ? currentSlide + 1 : 0);
    }, timeLapse);

    return () => clearInterval(slide);
  });

  return (
    cardContent && cardContent.map((item, index) => (
      <div className={classNames(styles.container, item.id === currentSlide ? styles.activeSlide : null )} key={index}>
        <img className={styles.image} src={item.imageUrl} />
        <h3 className={styles.text}>{item.quoteText}</h3>
      </div>
    ))
  )
};

export default Card;