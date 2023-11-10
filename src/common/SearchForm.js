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

    handleSearch(searchInput.trim());
  }

  /** Update form input */
  function handleChange(evt) {
    setSearchInput(evt.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4" style={{ maxWidth: "500px", margin: "auto" }}>
      <div className="input-group mb-3">
        <input
          className="form-control"
          type="text"
          name="search"
          placeholder="enter search term..."
          value={searchInput}
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </div>


    </form>
  );

}

export default SearchForm;
