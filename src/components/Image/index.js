import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

function Image({ src, alt, className, fallback = images.noImage, ...props }) {
  const [_fallback, setFallback] = useState();
  const handleError = () => {
    setFallback(fallback);
  };

  return (
    <img
      className={classNames(styles.wrapper, className)}
      src={_fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
}

export default forwardRef(Image);
