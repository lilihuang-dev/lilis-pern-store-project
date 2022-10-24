import React from "react";
// import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>About us</h3>
              <ul>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Mission and Vision</a>
                </li>
              </ul>
            </div>

            <div className="col-sm-6 col-md-3 item">
              <h3>Help</h3>
              <ul>
                <li>
                  <a href="#">Policies</a>
                </li>
                <li>
                  <a href="#!">Returns</a>
                </li>
                <li>
                  <a href="#!">Seller Center</a>
                </li>
              </ul>
            </div>

            <div className="col-md-6 item text">
              <h3>Contact Us</h3>
              <p>Happy Clocks</p>
              <p>168 West 168th street, #123</p>
              <p>New York, NY 1234</p>
            </div>

            {/* <div class="col item social">
              <a href="#!" className="fa fa-facebook">
                {null}
              </a>
              <a href="#!" className="fa fa-twitter">
                {null}
              </a>
              <a href="#!" className="fa fa-linkedin">
                {null}
              </a>
            </div> */}
          </div>

          <p className="copyright">Copyright Happy_Clocks.com 2022. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
