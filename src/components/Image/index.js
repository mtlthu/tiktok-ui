import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback = images.noImage, ...props }, ref) => {
  const [_fallback, setFallback] = useState();
  const handleError = () => {
    setFallback(fallback);
  };

  return (
    <img
      ref={ref}
      className={classNames(styles.wrapper, className)}
      src={_fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

export default Image;
