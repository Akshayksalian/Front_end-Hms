import React from "react";

export default function Header(props) {
  return (
    <header className="bg-dark py-3">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">{props.name}</h1>
        </div>
      </div>
    </header>
  );
}
