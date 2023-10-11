import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <div class="foot-big-container">
      <div class="up-curvs">
        <svg
          height="100"
          width="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 89.3"
          fill="#3f36b9"
        >
          <path
            d="M1919.5,89.5H-0.5c0,0,0-90,0-90c114.9,4.8,228.6,17.9,343.6,24.6c118.6,7,237.4,11.9,356.1,14.7
				c237.6,5.7,475.3,3.1,712.7-7.7c164.2-7.5,328.1-23.7,492.3-31c0.7,0,15.2-0.5,15.2-0.6C1919.5-0.5,1919.5,89.5,1919.5,89.5z"
          ></path>
        </svg>
      </div>
      <div class="main-footer">
        <div class="main-footer-sub">
          <div>
            <h5><span>BK</span>-<span>TECH</span></h5>
            <p>
              News letter dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Enter your email
            </p>
            <p>
              <button class="social-buttons">
                <!-- <FaFacebook size={20} /> -->
              </button>
              <button class="social-buttons">
                <!-- <FaXTwitter size={20} /> -->
              </button>
              <button class="social-buttons">
                <!-- <FaLinkedin size={20} /> -->
              </button>
              <button class="social-buttons">
                <!-- <FaInstagram size={20} /> -->
              </button>
            </p>
          </div>
          <div>
            <h5>Contact Us</h5>
            <div>
              <!-- <IoMdMail size={25} /> -->
              <div>
                <p>Email</p>
                <p>infos@businessname.com</p>
              </div>
            </div>
            <div>
              <!-- <FaPhoneAlt size={25} /> -->
              <div>
                <p>Phone</p>
                <p>+123456789</p>
              </div>
            </div>
            <div>
              <!-- <FaLocationDot size={25} /> -->
              <div>
                <p>Address</p>
                <p>123 Business Centre London SW1A 1AA</p>
              </div>
            </div>
          </div>
          <div>
            <h5>Compagny</h5>
            <p>Contact</p>
            <p>Customer's FAQ</p>
            <p>Refund Policy</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>License & Copyright</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {}
