import {useEffect, useState} from 'react';
import {getBlogPosts} from '../../contentful';

const promise = getBlogPosts();

const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        promise.then(blogPosts => {
            setPosts(blogPosts);
            setLoading(false);
        });
    }, []);

    return [posts, isLoading];
};

export default usePosts;