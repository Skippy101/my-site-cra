import React from 'react';
import './Snippet.css';

const Snippet = ({ title, description, author, tags, code }) => {
  return (
    <div className="snippet-container">
      <div className="snippet-metadata">
        <h3 className="snippet-title">{title}</h3>
        <p className="snippet-description">{description}</p>
        <div className="snippet-author">credit: {author}</div>
        <div className="snippet-tags">
          {tags.map((tag, index) => (
            <span className="snippet-tag" key={index}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="snippet-code">
        <pre><code>{code}</code></pre>
      </div>
    </div>
  );
};

export default Snippet;