import React from "react";

function footer() {
  return (
    <div>
      <footer className="footerContainer">
        <span className="footerSpan">
          by
          <a
            href="https://www.linkedin.com/in/burak-polat0/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            burakpolat
          </a>{" "}
          •
          <a
            href="https://github.com/PolatB"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            github
          </a>
        </span>
      </footer>
    </div>
  );
}

export default footer;
