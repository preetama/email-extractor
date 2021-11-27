import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer class="footer">
        <div class="d-sm-flex justify-content-center justify-content-sm-between">
          <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">
            Copyright © 2021{" "}
            <a href="https://sdmsols.com" target="_blank">
              SDM
            </a>
            . All rights reserved.
          </span>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
