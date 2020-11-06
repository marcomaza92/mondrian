import { useState, useEffect } from 'react';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';

import classNames from 'classnames';

import { cardContent } from '../../../api/constants';
import styles from './Card.module.scss';


const Card = () => {
  const timeLapse = 5000;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrentSlide(currentSlide !== cardContent.length - 1 ? currentSlide + 1 : 0);
    }, timeLapse);

    return () => clearInterval(slide);
  });

  return (
    cardContent && cardContent.map((item, index) => (
      <div className={classNames(styles.container, index === currentSlide ? styles.activeSlide : null )} key={index}>
        <Image imageUrl={item.imageUrl} />
        <Text quoteText={item.quoteText} />
      </div>
    ))
  )
};

export default Card;