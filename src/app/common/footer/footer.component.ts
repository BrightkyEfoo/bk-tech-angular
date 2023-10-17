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
            <h5 class="link" routerLink="/">
              <span>BK</span>-<span>TECH</span>
            </h5>
            <p>
              {{ "footer.text1" | transloco }}
            </p>
            <p>
              <button class="social-buttons">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                  ></path>
                </svg>
              </button>
              <button class="social-buttons">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  ></path>
                </svg>
              </button>
              <button class="social-buttons">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  ></path>
                </svg>
              </button>
              <button class="social-buttons">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </button>
            </p>
          </div>
          <div>
            <h5>{{ "footer.text2" | transloco }}</h5>
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"
                ></path>
              </svg>
              <div>
                <p>{{ "footer.text3" | transloco }}</p>
                <p>infos@businessname.com</p>
              </div>
            </div>
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                ></path>
              </svg>
              <div>
                <p>{{ "footer.text4" | transloco }}</p>
                <p>+123456789</p>
              </div>
            </div>
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 384 512"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                ></path>
              </svg>
              <div>
                <p>{{ "footer.text5" | transloco }}</p>
                <p>{{ "footer.text6" | transloco }}</p>
              </div>
            </div>
          </div>
          <div>
            <h5>{{ "footer.text7" | transloco }}</h5>
            <p class="link" routerLink="/contact">
              {{ "footer.link0" | transloco }}
            </p>
            <p class="future-links">
              {{ "footer.link1" | transloco }} <span>SOON</span>
            </p>
            <p class="future-links">
              {{ "footer.link2" | transloco }} <span>SOON</span>
            </p>
            <p class="future-links">
              {{ "footer.link3" | transloco }} <span>SOON</span>
            </p>
            <p class="future-links">
              {{ "footer.link4" | transloco }} <span>SOON</span>
            </p>
            <p class="future-links">
              {{ "footer.link5" | transloco }} <span>SOON</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./footer.component.scss"],
  styles: [
    `
      .future-links {
        position: relative;
        width: fit-content;
      }

      .future-links > span {
        font-size: 10px;
        border-radius: 5px;
        padding: 2px 5px;
        background-color: #6f6f6f;
        color: #fff;
        position: absolute;
        top: -8px;
        right: -40px;
      }
    `,
  ],
})
export class FooterComponent {}
