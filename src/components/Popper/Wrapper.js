import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
  console.log('children: ', children);
  return <div className={cx('wrapper', className)}>{children}</div>;
}

export default Wrapper;
