import React from 'react';

const BlogLayout = ({children}) => {
    return (
        <div>
            <h1>Hi, This is Blog</h1>
           {children}
        </div>
    );
};

export default BlogLayout;