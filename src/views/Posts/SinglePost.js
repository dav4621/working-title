import React from 'react';
import {Link, useParams} from 'react-router-dom';
import MD from 'react-markdown';

import {useSinglePost} from '../../hooks/useSinglePost'
// date conversion component

export default function SinglePost() {
    const {id} = useParams();
    const [post, isLoading] = useSinglePost(id);

    const renderPost = () => {
        if (isLoading) return <p>Loading...</p>

        return (
            <>
                <div className = 'post-intro'>
                    <h2 className = 'post-intro-title'>{post.title}</h2>
                    <small className = 'post-intro-date'>{post.date}</small>
                    <p className = 'post-intro-desc'>{post.description}</p>

                    <img className = 'post-intro-img' src = {post.featuredImage.fields.file.url} alt = {post.title} />
                </div>

                <div className = 'post-body'>
                    <MD children = {post.body} />
                </div>
            </>
        );
    };

    return (
        <div className = 'post'>
            <Link className = 'post-back' to = '/Posts'>
                {'< Back'}
            </Link>

            {renderPost()}
        </div>
    );
};