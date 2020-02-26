import React, { useEffect } from 'react';
import api, { Post$Response } from '../../api/api';
import { PostDetailed } from '../../components';

const Post: React.FC<{ match: any }> = props => {
  const [post, setPost] = React.useState<Post$Response>();

  const {
    match: {
      params: { postId }
    }
  } = props;

  useEffect(() => {
    api.getPost(postId).then(res => setPost(res));
  }, [postId]);

  if (!post) {
    return <></>;
  }

  return <PostDetailed {...post} />;
};

export default Post;
