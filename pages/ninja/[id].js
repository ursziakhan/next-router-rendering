import React from "react";
// how many pages the routes should generate
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await res.json();
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const data = await res.json();
  return { props: { data } };
};

function Detail({ data }) {
  return (
    <div>
      <h1>{data.title} </h1>
      <p>{data.body}</p>
    </div>
  );
}

export default Detail;
