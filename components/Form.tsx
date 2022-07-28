import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Input from './Input';

type Props = {
  children: React.ReactNode;
}

function Form({ children }: Props) {
  const { pathname } = useRouter();
  return (
    <section>
      <div>
        <header>
          <h1>Wedding</h1>
        </header>
        <form>
          <span>{ children }</span>
          <Input
            type="text"
            id="email"
            label="Email"
            placeholder="example@email.com"
          />
          <Input
            type="password"
            id="password"
            label="Password"
          />
          <button
            type="submit"
          >
            Send
          </button>
          <span>Forget password?</span>
        </form>
      </div>
      <div>
        {
          pathname === '/signup' ? (
            <Link href="/login">
              <a>Sign In</a>
            </Link>
          ) : (
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          )
        }
      </div>
    </section>
  );
}

export default Form;
