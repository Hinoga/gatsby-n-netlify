import React from "react"

import Profile from "../profile"

const Header = () => {
  return (
    <>
      <div style={{ maxWidth: `150px`, margin: "10px auto" }}>
        <Profile />
      </div>
      <div>
        <h2>Hi, i'm Oscar Gallego!</h2>
        <h3>Front-End Javascript Developer</h3>
        <p>
          Looking for an opportunity to develop and share my current set of
          skills within any technology company and help in the process.
        </p>
        <p>
          <b>Contact me:</b>
        </p>
        <div>
          <a
            href="https://github.com/Hinoga"
            target="_blank"
            rel="noopener noreferrer"
            className="fa fa-github-square"
          ></a>
          <a
            href="https://www.linkedin.com/in/gallegoscar/"
            target="_blank"
            rel="noopener noreferrer"
            className="fa fa-linkedin"
          ></a>
          <a
            href="https://angel.co/oscar-gallego"
            target="_blank"
            rel="noopener noreferrer"
            className="fa fa-angellist"
          ></a>
          <a
            href="OscarGallego:oscargallego27@gmail.com"
            className="fa fa-envelope-open"
          ></a>
        </div>
      </div>
    </>
  )
}

export default Header
