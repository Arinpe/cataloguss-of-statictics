import PropTypes from 'prop-types';

export default function Display({ memor, current }) {
  return (
    <div className="display">
      <div className="displayupper">{memor}</div>
      <div className="displaylower">{current}</div>
    </div>
  );
}

Display.defaultProps = {
  memor: '',
  current: '0',
};

Display.propTypes = {
  memor: PropTypes.string,
  current: PropTypes.string,
};
