import React from 'react';

const openSidebar = () => {
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');
  const blackout = document.querySelector('.blackout');
  const body = document.body;
  hamburger.classList.toggle('is-active');
  sidebar.classList.toggle('is-open');
  blackout.classList.toggle('is-active');
  body.classList.toggle('is-open');
};

const Hamburger = () => (
  <div>
    <button onClick={openSidebar} className="hamburger" type="button">
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
    <div className="blackout" />
  </div>
);

export default Hamburger;
