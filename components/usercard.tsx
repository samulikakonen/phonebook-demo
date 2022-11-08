export interface User {
  name: string;
  email: string;
  phone: string;
}

export default function UserCard({ user }: { user: User }) {
  return (
    <article>
      <h1>{user.name}</h1>
      <ul>
        <li>{user.email}</li>
        <li>{user.phone}</li>
      </ul>
    </article>
  );
}
