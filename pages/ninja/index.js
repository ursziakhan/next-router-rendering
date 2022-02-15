import React from "react";
import Link from "next/link";

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const data = await res.json();
  return { props: { data } };
};

function Ninjas({ data }) {
  return (
    <div>
      <h1>See All Products</h1>
      {data.map((ninja) => (
        <Link href={"/ninja/" + ninja.id} key={ninja.id}>
          <a>
            <h3>{ninja.title}</h3>
            <p>{ninja.body}</p>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default Ninjas;
