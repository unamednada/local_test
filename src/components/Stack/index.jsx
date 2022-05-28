import PropTypes from 'prop-types';
import './Stack.css';

function Stack({ icons, content }) {
  return (
    <div className={ `stack-main ${content}` }>
      <div className={ `stack-icons ${content}` }>
        {icons.map((icon, index) => (
          <img key={ index } src={ icon === 'chai' ? './images/chai.svg' : `./images/${icon}.png` } alt={ `icon-${icon}` } />
        ))}
      </div>
      <div className="stack-content">{ `${content}` }</div>
    </div>
  );
}

Stack.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
  content: PropTypes.string.isRequired,
};

export default Stack;
