import React from 'react';
import { Card, Layout } from '../../components';

const Event = () => {
  return (
    <>
      <h1>Event</h1>
      <Layout>
        <Card imageUrl="/events/event.jpg">
          <h2>Event Name</h2>
          <p>lorem ipsum</p>
        </Card>
        <Card imageUrl="/events/event.jpg">
          <h2>Event Name</h2>
          <p>lorem ipsum</p>
        </Card>
        <Card imageUrl="/events/event.jpg">
          <h2>Event Name</h2>
          <p>lorem ipsum</p>
        </Card>
        <Card imageUrl="/events/event.jpg">
          <h2>Event Name</h2>
          <p>lorem ipsum</p>
        </Card>
        <Card imageUrl="/events/event.jpg">
          <h2>Event Name</h2>
          <p>lorem ipsum</p>
        </Card>
        <Card imageUrl="/events/event.jpg">
          <h2>Event Name</h2>
          <p>lorem ipsum</p>
        </Card>
      </Layout>
    </>
  );
};

export default Event;
