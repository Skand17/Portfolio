import React from "react";

// Images

import Footer from "./footer"

function RightSidebar() {
  return (
    <React.Fragment>
      <Footer/>
      <div className="right-secton">
        <nav class="contact-me">
          {/* <a
            href="https://drive.google.com/file/d/0B00jdfNVqt4pUHpwWXN4cnFCNkE/view?usp=sharing"
            name="My Résumé"
            title="My Résumé"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-file-pdf-o"></i>
          </a> */}
          <a
            href="https://www.linkedin.com/in/skand-mishra-065b74124/"
            name="LinkedIn"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Skand17"
            name="GitHub"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-github"></i>
          </a>
          <a href="mailto:skandmishra370@gmail.com">
            <i
              class="fa fa-envelope-o"
              name="Mail: Skand Mishra"
              title="Mail: Skand Mishra"
            ></i>
          </a>
          <a href="https://drive.google.com/file/d/1tFWolFtkbjU5nDKtbOSBLtlkt7ZetPkO/view?usp=sharing" name="Resume" target="_blank" title="Resume" rel="noopener noreferrer">
            <i
              class="fa fa-file-pdf-o"
              name="Resume"
            ></i>
          </a>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default RightSidebar;
