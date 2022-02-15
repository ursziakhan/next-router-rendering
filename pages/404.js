import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

function notFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
      1;
    }, 3000);
  }, []);
  return (
    <div>
      <h1>ooopsss ....</h1>
      <h1>This Page is not Found</h1>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </p>
    </div>
  );
}

export default notFound;
