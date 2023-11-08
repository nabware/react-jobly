import { useState } from 'react';

/**
 * Form for searching
 *
 * Props:
 * - handleSearch: function to call in parent
 *
 * {CompanyList, JobList} -> SearchForm
 */

function SearchForm({ handleSearch }) {
  const [searchInput, setSearchInput] = useState("");

  /** Takes DOM event and call parent function */
  function handleSubmit(evt) {
    evt.preventDefault();

    handleSearch(searchInput);
  }

  /** Update form input */
  function handleChange(evt) {
    setSearchInput(evt.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="enter search term..."
        value={searchInput}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );

}

export default SearchForm;
