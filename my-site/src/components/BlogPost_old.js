import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter'; // Library to parse front matter
import { useParams } from 'react-router-dom'; // Import useParams

const BlogPost = () => {
  const { slug } = useParams(); // Get 'slug' param from the URL
  const [content, setContent] = useState('');
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    import(`../posts/${slug}.md`)
    .then(res => {
      fetch(res.default)
        .then(response => response.text())
        .then(text => {
          const { data, content } = matter(text);
          setMetadata(data); // Set front matter metadata
          setContent(content); // Set markdown content
        });
    })
    .catch(err => console.error(`Could not load post ${slug}: `, err));
  }, [slug]);

  if (!content) return <div>Loading...</div>;

  return (
    <div className="blog-post">
      <h1>{metadata.title}</h1>
      <p>By {metadata.author} on {metadata.date}</p>
      <div className="blog-content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
