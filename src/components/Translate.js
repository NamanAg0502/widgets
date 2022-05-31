import React, { useEffect, useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'Africans',
    value: 'af',
  },
  {
    label: 'Arabics',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  //   useEffect(() => {
  //     console.log('Translate');
  //   }, [text]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full space-y-6 mt-24">
        <label className="text-3xl font-bold text-gray-200">Enter Text</label>
        <input
          className="bg-neutral-800 rounded-md py-2 px-4 text-gray-200 focus:outline-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <Dropdown
        label="Select a language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <div className="text-gray-200">
        <h1 className="text-3xl">Converted Text</h1>
        <Convert language={language} text={text} />
      </div>
    </div>
  );
};

export default Translate;
