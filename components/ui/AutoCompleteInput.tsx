'use client';

import { useEffect, useState } from 'react';
import { Input } from './input';

export default function AutoCompleteInput({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (value: string) => void;
}) {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (query.trim() === '') {
      setSuggestions([]);
      return;
    }

    const dynamicSuggestions = [
      query,
      `${query}er`,
      `${query}ing`,
      `${query}s`,
      `best ${query}`,
      `${query} near me`,
    ];

    setSuggestions(dynamicSuggestions);
  }, [query]);

  const handleSelect = (value: string) => {
    setQuery(value);
    setSuggestions([]);
  };

  return (
    <div className="w-full max-w-md mt-1">
      <Input
        type="text"
        placeholder="Search for services..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full text-gray-700 py-3 px-4 text-lg"
      />

      {suggestions.length > 0 && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-200 rounded-md shadow-md max-h-48 overflow-y-auto overflow-x-auto whitespace-nowrap z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSelect(suggestion)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
