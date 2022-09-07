import PropTypes from 'prop-types';

export default function DropDown({ options, onChange, value }) {
  return (
    <select onChange={ onChange } value={ value }>
      {options.map((option) => (
        <option key={ option.value } value={ option.value }>{option.label}</option>
      ))}
    </select>
  );
}

DropDown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
