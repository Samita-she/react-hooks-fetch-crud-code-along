import React from "react";
import PropTypes from 'prop-types';

function Filter({ category, onCategoryChange, categories }) {
  return (
    <div className="Filter">
      <label htmlFor="category-filter">Filter by category:</label>
      <select
        id="category-filter"
        name="filter"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
}

Filter.propTypes = {
  category: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string)
};

Filter.defaultProps = {
  categories: ["Produce", "Dairy", "Dessert"]
};

export default Filter;
