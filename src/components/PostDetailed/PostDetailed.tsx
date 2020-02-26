import React from 'react';
import { Post$Response } from '../../api/api';

import './PostDetailed.css';

const PostDetailed: React.FC<Post$Response> = post => {
  return (
    <div className="post-detailed">
      <div className="post-detailed__cover">
        <img src={post.imageUrl} alt="" />
      </div>
      <div className="post-detailed__body">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={createMarkup(post.body)} />
      </div>
      <hr />
      <div className="post-detailed__body">
        <h2>Comments</h2>
        <p>0 comments</p>
      </div>
    </div>
  );

  function createMarkup(body: string) {
    return { __html: body };
  }
};

export default PostDetailed;
