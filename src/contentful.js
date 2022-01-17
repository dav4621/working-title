const client = require('contentful').createClient({
    space: 'y1d36eslyp7e',
    accessToken: 'qN8qSnTiqMYn_UHY4bJNFqDYBnKozwCkGzfkl9LDDKU'
});

const getBlogPosts = () => client.getEntries().then(response => response.items);

const getSinglePost = slug =>
    client
        .getEntries({
            'fields.slug': slug,
            content_type: 'blogPost'
        })
        .then(response => response.items);

export {getBlogPosts, getSinglePost};