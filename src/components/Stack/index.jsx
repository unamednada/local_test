import PropTypes from 'prop-types';
import './Stack.css';

function Stack({ icons, content }) {
  let links = [];

  if (Object.keys(icons)[0] !== '0') {
    links = Object.values(icons);
    icons = Object.keys(icons);
  }

  return (
    <div className={ `stack-main ${content}` }>
      <div className={ `stack-icons ${content}` }>
        {icons.map((icon, index) => {
          let href = '';
          const iconImage = <img key={ index } src={ icon === 'chai' ? './images/chai.svg' : `./images/${icon}.png` } alt={ `icon-${icon}` } />;
          let iconRender = iconImage;

          if (links.length > 0) {
            href = links[index];
            iconRender = <a href={ href } target="_blank" rel="noopener noreferrer">{ iconImage }</a>;
          }
          return iconRender;
        })}
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
