const SearchBar = () => {
  return (
    <form className='flex items-center'>
      <label htmlFor='simple-search' className='sr-only'>
        Search
      </label>
      <div className='relative w-full'>
        <input
          type='text'
          id='simple-search'
          className='rounded-lg w-44 py-1 pl-1 pr-5 bg-dark-primary placeholder-gray-400 text-white outline-none
          focus:transition-all focus:-translate-x-0 focus:w-72 duration-500 focus:duration-500 ease-linear'
          placeholder='Search'
          required
        />
        <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
          <svg
            aria-hidden='true'
            className='w-5 h-5 text-gray-500 dark:text-gray-400'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              clipRule='evenodd'
            ></path>
          </svg>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
