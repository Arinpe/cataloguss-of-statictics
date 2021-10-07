import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navlink({ link, title }) {
  return (
    <Link to={link}>
      {title}
    </Link>
  );
}

Navlink.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Navlink;
