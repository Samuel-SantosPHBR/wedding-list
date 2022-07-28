import React from 'react';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
}

function Form({ children }: Props) {
  return (
    <section>
      <div>
        <header>
          <h1>Wedding</h1>
        </header>
        <form>
          <span>{ children }</span>
          <label htmlFor="email">
            email
            <input
              type="text"
              name="email"
              id="email"
              placeholder="example@email.com"
            />
          </label>
          <label htmlFor="password">
            password
            <input
              type="password"
              name="email"
              id="password"
            />
          </label>
          <button
            type="submit"
          >
            Send
          </button>
          <span>Forget password?</span>
        </form>
      </div>
      <div>
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
      </div>
    </section>
  );
}

export default Form;
