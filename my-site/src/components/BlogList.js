// src/components/BlogList.js
import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';

function BlogList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/posts/posts.json')
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error('Error loading posts:', error));
    }, []);

    return (
        <div>
            <h1>Blog</h1>
            {posts.map((post) => (
                <div key={post.filename}>
                    <h2>{post.title}</h2>
                    <p>{post.date}</p>
                    <BlogPost filename={post.filename} />
                </div>
            ))}
        </div>
    );
}

export default BlogList;
