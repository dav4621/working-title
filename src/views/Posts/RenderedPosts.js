import React from 'react';
import {Link} from 'react-router-dom';

import {usePosts} from '../../hooks/usePosts';
// import {readableDate} from -> still need to write this function

export default function RenderedPosts() {
    const [posts, isLoading] = usePosts();

    const renderPosts = () => {
        if (isLoading) return <p>Loading...</p>;

        return posts.map(post => (
            <Link
                className = 'posts-post'
                key = {post.fields.slug}
                to = {post.fields.slug}
            >
                <div className = 'posts-post-img-container'>
                    <img className = 'posts-post-img-container-img' src = {post.fields.featuredImage.fields.file.url} alt = {post.fields.title} />
                </div>

                <small>{post.fields.date}</small>
                <h3>{post.fields.title}</h3>
                <p>{post.fields.description}</p>
            </Link>
        ));
    };

    return (
        <div className = 'posts-container'>
            <div className = 'posts'>{renderPosts()}</div>
        </div>
    );
};