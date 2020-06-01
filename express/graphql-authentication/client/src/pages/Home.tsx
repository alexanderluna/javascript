import React from 'react';
import { Link } from 'react-router-dom';
import { useUsersQuery } from '../generated/graphql';

interface Props {

}

const Home: React.FC<Props> = () => {
  const { data, loading, error } = useUsersQuery({ fetchPolicy: "network-only" });

  if (loading) {
    return (<div>loading...</div>);
  }

  if (error) {
    return (<div>error...</div>);
  }

  return (
    <div>
      <h2>Home</h2>
      <ul>
        {data!.users.map((user) =>
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>
              {user.username}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Home;
