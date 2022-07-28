import Link from "next/link";

function Form() {
  return (
    <section>
      <div>

        <header>
          <h1>Wedding</h1>
        </header>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <button type="submit">Send</button>
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
