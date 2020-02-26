import React, { useEffect } from 'react';
import { fib } from '../../utils/math';
import { Greeting, Layout, Card, ColorBox, Random, KickFlip, Alert } from '../../components';
import api, { Post$Response } from '../../api/api';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [posts, setPosts] = React.useState<Post$Response[]>([]);
  const fibArr = React.useRef(fib(10, 7));

  useEffect(() => {
    api.getPosts().then(res => setPosts(res));
  }, []);

  return (
    <>
      {/*       Pass this to your alert Component as children:
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur impedit quae atque illum? Quia fugiat corrupti vel
          veritatis ex, laudantium ullam vero minima maiores deserunt deleniti, tenetur ipsum facilis. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Aliquam aspernatur impedit quae atque illum? Quia fugiat corrupti vel veritatis ex, laudantium ullam
          vero minima maiores deserunt deleniti, tenetur ipsum facilis.
        </p>
      */}
      <Alert icon="info">This is a test</Alert>
      <Greeting />
      <Layout>
        <Random />
        <KickFlip />
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
      <ul className="list--unstyled">
        {fibArr.current.map((height, index) => (
          <li key={index}>
            <ColorBox height={height * 2}>{height}</ColorBox>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dashboard;
