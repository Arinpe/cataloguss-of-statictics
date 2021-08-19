import PropTypes from 'prop-types';

export default function ButtonPanel({ children }) {
  return <div className="button_panel">{children}</div>;
}

ButtonPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
