import React, { useEffect, useState, useRef } from 'react';
import { FaCaretDown } from 'react-icons/fa';

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };
  }, []);

  useEffect(() => {
    document.body.addEventListener(
      'click',
      () => {
        setOpen(false);
      },
      { capture: true }
    );
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.label}
        className="bg-neutral-700 my-2 p-2 rounded-md cursor-pointer hover:shadow-md hover:shadow-black"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="min-h-screen relative top-24 w-full">
      <div className="text-gray-200 flex flex-col items-center">
        <label className="text-3xl font-bold mb-6">{label}</label>
        <div className="bg-neutral-800 w-3/4 md:w-1/2 px-4 rounded-lg">
          <div
            onClick={() => setOpen(!open)}
            className="flex flex-row items-center justify-between py-2 cursor-pointer"
          >
            <div>{selected.label}</div>
            <FaCaretDown />
          </div>
          <div
            className={`mt-3 py-2 border-t border-neutral-500 ${
              open ? '' : 'hidden'
            }`}
          >
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
