import React, { useEffect } from 'react';
import api, { Member$Response } from '../../api/api';

const Member: React.FC<{ match: any }> = props => {
  const [member, setMember] = React.useState<Member$Response>();

  const {
    match: {
      params: { memberId }
    }
  } = props;

  useEffect(() => {
    api.getMember(memberId).then(res => setMember(res));
  }, [memberId]);

  if (!member) {
    return <></>;
  }

  return (
    <>
      <h1>
        {member.firstName} {member.lastName}
      </h1>
      <p>{JSON.stringify(member)}</p>
    </>
  );
};

export default Member;
