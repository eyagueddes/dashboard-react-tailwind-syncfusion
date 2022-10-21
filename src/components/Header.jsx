import React from 'react';

const Header = ({category,title}) => {
  return (
    <div>
      <div className='mb-10'>
          <p className='text-gray-400'>{category}</p>
      </div>
    </div>
  );
}

export default Header;
