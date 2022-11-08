import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function NavBar() {
  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.push(`/search/?searchParam=${event.target.searchParam.value}`);
  };

  return (
    <>
      <header>
        <Link href='/'>
          <Image src={'/search.svg'} width='68' height='68' alt='Search logo' />
        </Link>
        <form onSubmit={handleSubmit}>
          <input id='searchParam' name='searchParam' type={'text'} />
          <input type={'submit'} value='SEARCH' />
        </form>
      </header>
    </>
  );
}
