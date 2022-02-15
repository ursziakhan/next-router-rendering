import React from "react";

import Link from "next/link";
function Navbar() {
  return (
    <nav className="main-nav">
      <div className="logo">
        <h1>Practice App</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninja">
        <a>Product-Listing</a>
      </Link>
    </nav>
  );
}

export default Navbar;
