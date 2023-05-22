import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Port<span style={{color:'rgb(112,79,238)',borderBottom:'5px solid darkgreen'}}>folio</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#hed">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#abt">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skl">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#prj">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#co">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
