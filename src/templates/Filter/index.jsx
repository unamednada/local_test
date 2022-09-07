import { useState } from 'react';
import { DropDown } from '../../components';

export default function Filter() {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h2>Filter by</h2>
      <DropDown
        name="filter"
        value={ filter }
        onChange={ handleFilterChange }
        options={ [
          { value: 'all', label: 'All' },
          { value: 'active', label: 'Active' },
          { value: 'completed', label: 'Completed' },
        ] }
      />
    </div>
  );
}
