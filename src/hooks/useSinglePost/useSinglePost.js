import {useEffect, useState} from 'react';
import {getSinglePost} from '../../contentful';

export default function useSinglePost(slug) {

    const promise = getSinglePost(slug);
    const [post, setPost] = useState(null);
    const[isLoading, setLoading] = useState(true);

    useEffect(() => {

        const abortController = new AbortController();
        const signal = abortController.signal;


        promise
        .then(result => {
            setPost(result[0].fields);
            setLoading(false);
        });

        return function cleanup() {
            abortController.abort(promise)
        };

    }, [promise]);

    return [post, isLoading];
};