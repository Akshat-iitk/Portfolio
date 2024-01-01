import React from 'react';

const Hobbies = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Hobbies</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Football */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Football</h3>
          <p>Enjoying the beautiful game!</p>
        </div>

        {/* Gaming */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Gaming</h3>
          <p>Exploring virtual worlds.</p>
        </div>

        {/* Watching Anime and Reading Manga */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Watching Anime and Reading Manga</h3>
          <p>Immersing in captivating stories.</p>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
