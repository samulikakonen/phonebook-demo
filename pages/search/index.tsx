import UserCard, { User } from '../../components/usercard';

export async function getServerSideProps(context: any) {
  const users = await fetch('https://jsonplaceholder.typicode.com/users');

  return {
    props: {
      users: await users.json(),
    },
  };
}

interface SearchProps {
  users: User[];
}

export default function Search({ users = [] }: SearchProps) {
  return (
    <>
      <h1 style={{ borderBottom: '1px solid black', padding: '0 0 40px 0', marginBottom: '20px' }}>
        We found <span style={{ color: 'green' }}>{users.length}</span> users with these search parameters
      </h1>
      {users.map((user) => (
        <UserCard key={user.name} user={user} />
      ))}
    </>
  );
}
