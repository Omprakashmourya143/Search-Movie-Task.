const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
    return (
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-lg p-2 w-1/2 md:w-1/3"
          placeholder="Search for movies..."
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
        >
          Search
        </button>
      </div>
    );
  };
  