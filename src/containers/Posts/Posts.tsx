import React, { useEffect } from 'react';
import api, { Post$Response } from '../../api/api';
import { Layout, Card } from '../../components';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = React.useState<Post$Response[]>([]);

  useEffect(() => {
    api.getPosts().then(res => setPosts(res));
  }, []);

  return (
    <>
      <h1>Posts</h1>
      <Layout>
        {posts.map(post => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <Card videoUrl={post.videoUrl} imageUrl={post.imageUrl}>
              <h2>{post.title}</h2>
              <p className="mt-0 text-muted text-small">Published by {post.author}</p>
              <p>{post.summary}</p>
            </Card>
          </Link>
        ))}
      </Layout>
    </>
  );
};

export default Posts;
