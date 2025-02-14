import React from 'react'

function BookForm({ book, setBook, onSubmit, darkMode }) {
  return (
    <div
      className={`transition-all duration-700 ${
        darkMode ? ' text-white' : 'text-black'
      }`}
    >
      <h2
        className={`text-xl font-semibold mb-5 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        {'New Book'}
      </h2>
      <div className='grid grid-cols-1 gap-5 mt-2'>
        {Object.keys(book).map((key) => (
          <input
            key={key}
            type='text'
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            value={book[key]}
            onChange={(e) => setBook({ ...book, [key]: e.target.value })}
            className={`p-2 border rounded ${
              darkMode
                ? 'bg-gray-700 text-white border-gray-600'
                : 'bg-white text-black border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500
            transition-all duration-700`}
          />
        ))}
      </div>
      <button
        onClick={onSubmit}
        className={`mt-6 w-full p-2 rounded ${
          darkMode
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {book.id ? 'Update' : 'Add'}
      </button>
    </div>
  )
}

export default BookForm
