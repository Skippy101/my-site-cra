import React, { useState, useEffect } from 'react';
import snippetsData from '../data/snippets_vex.json';  // Import JSON file
import Snippet from './Snippet';

/**
 * Fetches snippets from the API and displays them in a list.
 *
 * On mount, fetches snippets for the first page.
 * When the user clicks on a pagination button, fetches snippets for the new page.
 *
 * returns {ReactElement} A list of snippets and a pagination section.
 */
const SnippetList = () => {
  const [snippets, setSnippets] = useState([]); // Stores the snippets fetched from the API
  const [page, setPage] = useState(1); // Stores the current page
  const [totalPages, setTotalPages] = useState(1); // Stores the total number of pages

  // useEffect(() => {
  //   // Fetches snippets for the first page on mount
  //   fetch(`/api/snippets?page=${page}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setSnippets(data.snippets);
  //       setTotalPages(data.totalPages);
  //     });
  // }, [page]); // Re-fetches snippets when the page changes

  useEffect(() => {
    // Here we can set the static data from the JSON file
    setSnippets(snippetsData);
  }, []);

  return (
    <div>
      {/* Maps over the snippets and renders each one */}
      {snippets.map(snippet => (
        <Snippet
          key={snippet.id}
          title={snippet.title}
          description={snippet.description}
          code={snippet.code}
          tags={snippet.tags}
          author={snippet.author}
        />
      ))}
      <div className="pagination">
        {/* Maps over the total number of pages and renders a pagination button for each page */}
        {Array.from({ length: totalPages }).map((_, i) => (
          <button key={i} onClick={() => setPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SnippetList;
