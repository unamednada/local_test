import PropTypes from 'prop-types';
import './Spotlight.css';

function Spotlight({ title, className, children }) {
  return (
    <div className={ `spotlight ${className}` }>
      <h2>{ title }</h2>
      { children }
    </div>
  );
}

Spotlight.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
};

Spotlight.defaultProps = {
  className: '',
};

export default Spotlight;
