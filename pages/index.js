import Link from "next/link";
export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is
      </p>
      <Link href="/ninja">
        <a>See al Products </a>
      </Link>
    </div>
  );
}
