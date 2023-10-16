import { Component, OnDestroy, OnInit } from "@angular/core";
import { Event } from "@angular/router";
import Typed from "typed.js";

@Component({
  selector: "contact-section1",
  template: `
    <div class="contact-section-1-container">
      <div class="contact-section-1-container-sub">
        <!-- <TypeAnimation
          sequence={[
            "Bonjour  ",
            1300,
            "Hello  ",
            1000,
            "Konnichiwa  ",
            1600,
            "Hola  ",
            1500,
            "Guten tag  ",
            1000,
            "Ola  ",
            900,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
        /> -->
        <div>
          <span class="animated2">Bonjour</span>
        </div>
        <p class="simple-about-p">
          Please fill out the form below if you have a plan or project in mind
          that you'd like to share with us.
        </p>
        <div class="sub-section-container">
          <div class="form-container">
            <h2 class="title-blue">Get In Touch</h2>
            <p class="simple-about-p">
              We will catch you as early as we receive the message
            </p>
            <form #contactForm="ngForm">
              <div
                class="{{
                  'input-wrapper-contaier ' +
                    (!fullname.pristine && fullname.valid
                      ? 'border-blue '
                      : '') +
                    (!fullname.pristine && !fullname.valid ? 'border-red ' : '')
                }}"
              >
                <mat-icon>perm_identity</mat-icon>
                <input
                  name="fullname"
                  id="name"
                  type="text"
                  required="true"
                  pattern="^[a-zA-Z0-9àéèç]{2}[a-zA-Z0-9àéèç ]{0,50}$"
                  #fullname="ngModel"
                  [(ngModel)]="form.fullname"
                />
                <mat-icon
                  *ngIf="!fullname.pristine && fullname.valid"
                  class="color-green"
                  >check</mat-icon
                >

                <mat-icon
                  *ngIf="!fullname.pristine && !fullname.valid"
                  class="color-red"
                  >error</mat-icon
                >
                <div class="placeholder-container ">
                  <span
                    class="{{
                      form.fullname
                        ? 'placeholder placeholder-top'
                        : 'placeholder'
                    }}"
                  >
                    Full Name
                  </span>
                </div>
                <div
                  *ngIf="!fullname.pristine && !fullname.valid"
                  class="error-message-container"
                >
                  <span class="error-message">Please enter your name</span>
                </div>
              </div>

              <!-- number -->
              <div
                class="{{
                  'input-wrapper-contaier ' +
                    (!phone.pristine && phone.valid ? 'border-blue ' : '') +
                    (!phone.pristine && !phone.valid ? 'border-red ' : '')
                }}"
              >
                <mat-icon>local_phone</mat-icon>
                <input
                  name="phone"
                  type="tel"
                  id="phone"
                  required
                  pattern="^(?(+?d{2,4}))?[- ]?(d{2,4})[- ]?(d{1,5})$"
                  [(ngModel)]="form.phone"
                  #phone="ngModel"
                />
                <mat-icon
                  *ngIf="!phone.pristine && phone.valid"
                  class="color-green"
                  >check</mat-icon
                >

                <mat-icon
                  *ngIf="!phone.pristine && !phone.valid"
                  class="color-red"
                  >error</mat-icon
                >

                <div class="placeholder-container ">
                  <span
                    class="{{
                      form.phone ? 'placeholder placeholder-top' : 'placeholder'
                    }}"
                  >
                    Mobile Number
                  </span>
                </div>
                <div
                  *ngIf="!phone.valid && !phone.pristine"
                  class="error-message-container"
                >
                  <span class="error-message"
                    >Please enter a valid mobile number</span
                  >
                </div>
              </div>

              <!-- email -->
              <div
                class="{{
                  'input-wrapper-contaier ' +
                    (!email.pristine && email.valid ? 'border-blue ' : '') +
                    (!email.pristine && !email.valid ? 'border-red ' : '')
                }}"
              >
                <mat-icon>mail</mat-icon>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  pattern='^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$'
                  [(ngModel)]="form.email"
                  #email="ngModel"
                />
                <mat-icon
                  *ngIf="!email.pristine && email.valid"
                  class="color-green"
                  >check</mat-icon
                >

                <mat-icon
                  *ngIf="!email.pristine && !email.valid"
                  class="color-red"
                  >error</mat-icon
                >

                <div class="placeholder-container ">
                  <span
                    class="{{
                      form.email ? 'placeholder placeholder-top' : 'placeholder'
                    }}"
                  >
                    Email Address
                  </span>
                </div>
                <div
                  *ngIf="!email.valid && !email.pristine"
                  class="error-message-container"
                >
                  <span class="error-message"
                    >Please enter a valid email address</span
                  >
                </div>
              </div>

              <!-- intrest -->
              <div
                class="{{
                  'input-wrapper-contaier ' +
                    (!interest.pristine && interest.valid
                      ? 'border-blue '
                      : '') +
                    (!interest.pristine && !interest.valid ? 'border-red ' : '')
                }}"
              >
                <mat-icon>insert_drive_file</mat-icon>
                <select
                  name="interest"
                  id="interest"
                  required
                  pattern="^[a-zA-Z0-9].{0,100}$"
                  [(ngModel)]="form.interest"
                  #interest="ngModel"
                >
                  <option></option>
                  <option>Graphic Design</option>
                  <option>Web Design</option>
                  <option>App Design</option>
                  <option>Other</option>
                </select>
                <mat-icon
                  *ngIf="!interest.pristine && interest.valid"
                  class="color-green"
                  >check</mat-icon
                >

                <mat-icon
                  *ngIf="!interest.pristine && !interest.valid"
                  class="color-red"
                  >error</mat-icon
                >

                <div class="placeholder-container ">
                  <span
                    class="{{
                      form.interest
                        ? 'placeholder placeholder-top'
                        : 'placeholder'
                    }}"
                  >
                    Interested In
                  </span>
                </div>
                <div
                  *ngIf="!interest.valid && !interest.pristine"
                  class="error-message-container"
                >
                  <span class="error-message">Please select your interest</span>
                </div>
              </div>

              <!-- location -->
              <div
                class="{{
                  'input-wrapper-contaier ' +
                    (!location.pristine && location.valid
                      ? 'border-blue '
                      : '') +
                    (!location.pristine && !location.valid ? 'border-red ' : '')
                }}"
              >
                <mat-icon>location_on</mat-icon>
                <input
                  name="location"
                  type="text"
                  id="location"
                  required
                  pattern="^[a-zA-Z0-9].{1,100}$"
                  [(ngModel)]="form.location"
                  #location="ngModel"
                />
                <mat-icon
                  *ngIf="!location.pristine && location.valid"
                  class="color-green"
                >
                  check
                </mat-icon>

                <mat-icon
                  *ngIf="!location.pristine && !location.valid"
                  class="color-red"
                >
                  error
                </mat-icon>

                <div class="placeholder-container ">
                  <span
                    class="{{
                      form.location
                        ? 'placeholder placeholder-top'
                        : 'placeholder'
                    }}"
                  >
                    Your Location
                  </span>
                </div>
                <div
                  *ngIf="!location.valid && !location.pristine"
                  class="error-message-container"
                >
                  <span class="error-message">Please enter your location</span>
                </div>
              </div>

              <!-- whatsapp -->
              <div
                class="{{
                  'input-wrapper-contaier ' +
                    (!whatsapp.pristine && whatsapp.valid
                      ? 'border-blue '
                      : '') +
                    (!whatsapp.pristine && !whatsapp.valid ? 'border-red ' : '')
                }}"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                  ></path>
                </svg>
                <input
                  name="whatsapp"
                  type="tel"
                  required
                  pattern="^(?(+?d{2,4}))?[- ]?(d{2,4})[- ]?(d{1,5})$"
                  [(ngModel)]="form.whatsapp"
                  #whatsapp="ngModel"
                />
                <mat-icon
                  *ngIf="!whatsapp.pristine && whatsapp.valid"
                  class="color-green"
                  >check</mat-icon
                >

                <mat-icon
                  *ngIf="!whatsapp.pristine && !whatsapp.valid"
                  class="color-red"
                  >error</mat-icon
                >

                <div class="placeholder-container ">
                  <span
                    class="{{
                      form.whatsapp
                        ? 'placeholder placeholder-top'
                        : 'placeholder'
                    }}"
                  >
                    Whatsapp No
                  </span>
                </div>
                <div
                  *ngIf="!whatsapp.valid && !whatsapp.pristine"
                  class="error-message-container"
                >
                  <span class="error-message">Please provide Whatsapp No.</span>
                </div>
              </div>

              <!-- brief -->
              <div
                class="{{
                  'input-wrapper-contaier ' +
                    (!brief.pristine && brief.valid ? 'border-blue ' : '') +
                    (!brief.pristine && !brief.valid ? 'border-red ' : '')
                }}"
              >
                <mat-icon>message</mat-icon>
                <textarea
                  name="brief"
                  id="brief"
                  required
                  pattern="^.{1,10000}$"
                  [(ngModel)]="form.brief"
                  name="brief"
                  #brief="ngModel"
                ></textarea>
                <mat-icon
                  *ngIf="!brief.pristine && brief.valid"
                  class="color-green"
                  >check</mat-icon
                >

                <mat-icon
                  *ngIf="!brief.pristine && !brief.valid"
                  class="color-red"
                  >error</mat-icon
                >

                <div class="placeholder-container ">
                  <span
                    class="{{
                      form.brief ? 'placeholder placeholder-top' : 'placeholder'
                    }}"
                  >
                    Brief about the project
                  </span>
                </div>
                <div
                  *ngIf="!brief.valid && !brief.pristine"
                  class="error-message-container"
                >
                  <span class="error-message"
                    >Please enter brief of the project (Max 10000 characters)
                  </span>
                </div>
              </div>
            </form>

            <div>
              <input type="checkbox" />
              <label>
                By clicking the “Submit” button you agree to our
                <span rooterLink="/terms-conditions">Terms & Conditions.</span>
              </label>
              <button type="button">
                Submit
                <mat-icon class="color-white">keyboard_arrow_right</mat-icon>
              </button>
            </div>
          </div>
          <div class="right-side-container">
            <h2 class="title-blue">Trusted by</h2>
            <span class="simple-about-p">
              Clients belive us and we deliverd them good service
            </span>
            <div>
              <img *ngFor="let el of clients" src="{{ el.image }}" alt="" />
            </div>
            <!-- <CustomerSlider3 /> -->
            <div
              class="contact-section-1-container-slider"
              id="contact-section-1-container-slider"
            >
              <div
                *ngFor="let slide of data"
                class="customer-details-container-contact-section-1"
              >
                <p class="simple-about-p">{{ slide.text }}</p>
                <div>
                  <img src="{{ slide.photo }}" alt="" />
                  <div>
                    <p class="title-blue">{{ slide.name }}</p>
                    <p class="title-red">{{ slide.poste }}</p>
                  </div>
                </div>
              </div>
              <div class="pagination-container-contact-section-1">
                <div
                  *ngFor="let pagination of subArray"
                  class="{{
                    pagination === selected
                      ? 'pagination-selected'
                      : 'pagination-simple'
                  }}"
                >
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: [
    "../sections-style.scss",
    "./slider-style.scss",
    "./inputs-style.scss",
    "../../about/sections-style.scss",
    "../../about/cards-style.scss",
  ],
  styles: [
    `
      .color-red {
        color: red;
      }
      .color-green {
        color: green;
      }
      .color-white {
        color: white;
      }
      .animated2 {
        width: fit-content;
        display: inline;
      }
      /* .typed-cursor {
        font-size : 48px!important
      } */
    `,
  ],
})
export class ContactSection1Component implements OnInit, OnDestroy {
  form = {
    fullname: "",
    phone: "",
    email: "",
    interest: "",
    location: "",
    whatsapp: "",
    brief: "",
    terms: false,
  };

  touched = {
    fullname: false,
    phone: false,
    email: false,
    interest: false,
    location: false,
    whatsapp: false,
    brief: false,
    // terms: false,
  };
  focused = {
    fullname: false,
    phone: false,
    email: false,
    interest: false,
    location: false,
    whatsapp: false,
    brief: false,
    // terms: false,
  };

  clients: { link: string; image: string }[] = [
    {
      image: "../../../assets/images/customer-logo-1.png",
      link: "#",
    },
    {
      image: "../../../assets/images/customer-logo-2.png",
      link: "#",
    },
    {
      image: "../../../assets/images/customer-logo-3.png",
      link: "#",
    },
    {
      image: "../../../assets/images/customer-logo-4.png",
      link: "#",
    },
    {
      image: "../../../assets/images/customer-logo-5.png",
      link: "#",
    },
    {
      image: "../../../assets/images/customer-logo-6.png",
      link: "#",
    },
    {
      image: "../../../assets/images/customer-logo-7.png",
      link: "#",
    },
    {
      image: "../../../assets/images/customer-logo-8.png",
      link: "#",
    },
    {
      image: "../../../assets/images/customer-logo-9.png",
      link: "#",
    },
  ];

  data = [
    {
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      photo: "../../../assets/images/client-pic-x.jpg",
      name: "bikos maximus",
      poste: "CEO",
    },
    {
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      photo: "../../../assets/images/client-pic-x.jpg",
      name: "bikos maximus",
      poste: "CEO",
    },
    {
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      photo: "../../../assets/images/client-pic-x.jpg",
      name: "bikos maximus",
      poste: "CEO",
    },
  ];

  selected = 0;
  myInter: NodeJS.Timeout | undefined;

  subArray = Array(this.data.length)
    .fill(0)
    .map((el, i) => i);

  ngOnDestroy(): void {
    clearInterval(this.myInter);
  }
  ngOnInit(): void {
    this.myInter = setInterval(() => {
      const ell = document.getElementById("contact-section-1-container-slider");

      if (this.selected === this.data.length - 1) {
        this.selected = 0;
      } else {
        this.selected = this.selected + 1;
      }
      ell?.scrollTo({
        top: 0,
        left: this.selected * ell.clientWidth,
        behavior: "smooth",
      });
    }, 2000);
    const type = new Typed(".animated2", {
      strings: [
        "Bonjour  ",
        "Hello  ",
        "Konnichiwa  ",
        "Hola  ",
        "Guten tag  ",
        "Ola  ",
      ],
      typeSpeed: 55,
      backSpeed: 40,
      loop: true,
    });
  }

  ValidateEmail(input: string) {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }
  validatePhoneNumber(input_str: string) {
    var re = /^\(?(\+?\d{2,4})\)?[- ]?(\d{2,4})[- ]?(\d{1,5})$/;

    return re.test(input_str);
  }

  verificatorName(value: string) {
    return true;
  }
  nameFocus() {}
  nameBlur() {}

  verificatorPhone(value: string) {
    return true;
  }
  phoneFocus() {}
  phoneBlur() {}

  verificator(value: string) {
    return value.length > 5;
  }
}
