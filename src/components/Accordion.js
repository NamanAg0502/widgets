import React, { useState } from 'react';
import { FaCaretDown, FaCaretRight } from 'react-icons/fa';

const Accordion = ({ items }) => {
  // Usestate hook for active indexs
  const [activeIndex, setActiveIndex] = useState(null);

  // Onclick helper function when click on title
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  //  mapping the item function from props
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'display-block' : 'hidden';
    return (
      <div
        key={item.title}
        className="cursor-pointer text-gray-200 bg-neutral-800 p-4 rounded-md hover:shadow-lg hover:shadow-black active:shadow-md active:shadow-black"
        onClick={() => {
          onTitleClick(index);
        }}
      >
        <div className="flex-row flex items-center space-x-3">
          {activeIndex === index ? <FaCaretDown /> : <FaCaretRight />}
          <span>{item.title}</span>
        </div>
        <div className={`${active} pt-2 mt-3 pl-6 border-t border-neutral-700`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-4">
      {renderedItems}
    </div>
  );
};

export default Accordion;
