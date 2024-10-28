import React, { useEffect, useState } from 'react';
import matter from 'gray-matter';
import { Buffer } from 'buffer';

function BlogPost({ filename }) {
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(`/posts/${filename}.md`)
            .then((response) => response.text())
            .then((text) => {
                const parsedMarkdown = matter(text);
                setPost(parsedMarkdown);
            })
            .catch((error) => console.error('Error loading markdown:', error));
    }, [filename]);

    return (
        <div>
            <h1>Test Post</h1>
            <h1>{post.data?.title}</h1>
            <p>{post.data?.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
}

export default BlogPost;
