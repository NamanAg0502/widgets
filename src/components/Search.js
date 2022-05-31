import React, { useEffect, useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('coding');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) search();
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  const renderItems = results.map((result) => {
    return (
      <div key={result.pageid} className="bg-neutral-800 p-4 rounded-md">
        <div className="font-bold text-xl text-gray-200 mb-1 flex flex-row justify-between">
          <span>{result.title}</span>
          <span>
            <a
              href={`https://en.wikipedia.org?curid=${result.pageid}`}
              target="_blank"
              rel="noreferrer"
            >
              <FiExternalLink />
            </a>
          </span>
        </div>
        <div className="text-gray-300">
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="absolute top-24 w-full">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-8xl font-bold text-gray-100">WikiPedia</h1>
          <input
            type="text"
            name="search"
            className="w-1/2 h-10 p-4 border-none rounded-full bg-neutral-200 focus:outline-none"
            placeholder="Search..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        <div className="w-3/4 mx-auto flex flex-col mt-10 space-y-5">
          {renderItems}
        </div>
      </div>
    </div>
  );
};

export default Search;
