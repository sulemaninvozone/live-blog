import React from 'react';

const Header = () => {
  return (
    <header className="w-full container mx-auto">
      <div className="flex flex-col items-center py-12">
        <a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="/">
          Live Blog
        </a>
        <p className="text-lg text-gray-600">Posts from live blog.</p>
      </div>
    </header>
  );
};

export default Header;
