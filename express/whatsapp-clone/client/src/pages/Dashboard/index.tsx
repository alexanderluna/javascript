import React from 'react';
import Sidebar from '../../components/Sidebar';

interface Props {
  id: string;
}

const Dashboard: React.FC<Props> = ({ id }) => {
  return (
    <div>
      <Sidebar id={id} />
    </div>
  )
};

export default Dashboard;
