import React, { useEffect } from 'react';
import { Member, Layout } from '../../components';
import api, { Member$Response } from '../../api/api';
import { Link } from 'react-router-dom';

const Members = () => {
  const [users, setUsers] = React.useState<Member$Response[]>([]);

  useEffect(() => {
    api.getMembers().then(res => setUsers(res));
  }, []);

  return (
    <>
      <h1>Members</h1>
      <Layout type="members">
        {users.map((member, index) => (
          <Link to={`/members/${member.id}`} key={member.id}>
            <Member {...member} />
          </Link>
        ))}
      </Layout>
    </>
  );
};

export default Members;
