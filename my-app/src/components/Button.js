import PropTypes from 'prop-types';

export default function Button({
  name, onClick, color, wide,
}) {
  return (
    <button
      className={`btn ${color ? 'operatorBtn' : ''} ${wide ? 'wide' : ''}`}
      type="button"
      value={name}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

Button.defaultProps = {
  color: null,
  wide: null,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.bool,
  wide: PropTypes.bool,
};
