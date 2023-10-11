import { Component, OnDestroy, OnInit } from "@angular/core";
import { Event } from "@angular/router";

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
        <h2>Bonjour</h2>

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
                    (fullname.pristine && fullname.valid
                      ? 'border-blue '
                      : '') +
                    (fullname.pristine && !fullname.valid ? 'border-red ' : '')
                }}"
              >
                <!-- <Icon size={18} /> -->
                <input
                  name="fullname"
                  id="name"
                  type="text"
                  required="true"
                  pattern="^[a-zA-Z0-9àéèç]{1,40}$"
                  #fullname="ngModel"
                  [(ngModel)]="form.fullname"
                />
                <span [hidden]="!fullname.pristine && !fullname.valid"> G</span>
                <!-- <FaCheck color="green" size={20} /> -->

                <!-- <FaXmark color="red" size={20} /> -->
                <span [hidden]="!fullname.pristine && fullname.valid"> B</span>

                <div class="placeholder-container ">
                  <span
                    class="{{
                      fullname.pristine || form.fullname
                        ? 'placeholder placeholder-top'
                        : 'placeholder'
                    }}"
                  >
                    Full Name
                  </span>
                </div>
                <div
                  *ngIf="!fullname.valid && fullname.pristine"
                  class="error-message-container"
                >
                  <span class="error-message">Please enter your name</span>
                </div>
              </div>

              <!-- number -->
              <div
                class="{{
                  'input-wrapper-contaier ' +
                    (phone.pristine && phone.valid ? 'border-blue ' : '') +
                    (phone.pristine && !phone.valid ? 'border-red ' : '')
                }}"
              >
                <!-- <Icon size={18} /> -->
                <input
                  name="phone"
                  type="tel"
                  id="phone"
                  required
                  pattern="^[a-zA-Z0-9àéèç]{1,25}$"
                  [(ngModel)]="form.phone"
                  #phone="ngModel"
                />
                <span [hidden]="!phone.pristine && !phone.valid"> G</span>
                <!-- <FaCheck color="green" size={20} /> -->

                <!-- <FaXmark color="red" size={20} /> -->
                <span [hidden]="!phone.pristine && phone.valid"> B</span>

                <div class="placeholder-container ">
                  <span
                    class="{{
                      phone.pristine || form.phone
                        ? 'placeholder placeholder-top'
                        : 'placeholder'
                    }}"
                  >
                    Mobile Number
                  </span>
                </div>
                <div
                  *ngIf="!phone.valid && phone.pristine"
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
                    (email.pristine && email.valid ? 'border-blue ' : '') +
                    (email.pristine && !email.valid ? 'border-red ' : '')
                }}"
              >
                <!-- <Icon size={18} /> -->
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  pattern="^[a-zA-Z0-9àéèç]{1,25}$"
                  [(ngModel)]="form.email"
                  #email="ngModel"
                />
                <span [hidden]="!email.pristine && !email.valid"> G</span>
                <!-- <FaCheck color="green" size={20} /> -->

                <!-- <FaXmark color="red" size={20} /> -->
                <span [hidden]="!email.pristine && email.valid"> B</span>

                <div class="placeholder-container ">
                  <span
                    class="{{
                      email.pristine || form.email
                        ? 'placeholder placeholder-top'
                        : 'placeholder'
                    }}"
                  >
                    Email Address
                  </span>
                </div>
                <div
                  *ngIf="!email.valid && email.pristine"
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
                    (interest.pristine && interest.valid
                      ? 'border-blue '
                      : '') +
                    (interest.pristine && !interest.valid ? 'border-red ' : '')
                }}"
              >
                <select
                  name="interest"
                  id="interest"
                  required
                  pattern="^[a-zA-Z0-9àéèç]{1,1000}$"
                  [(ngModel)]="form.interest"
                  #interest="ngModel"
                >
                  <option></option>
                  <option>Graphic Design</option>
                  <option>Web Design</option>
                  <option>App Design</option>
                  <option>Other</option>
                </select>
                <span [hidden]="!interest.pristine && !interest.valid"> G</span>
                <!-- <FaCheck color="green" size={20} /> -->

                <!-- <FaXmark color="red" size={20} /> -->
                <span [hidden]="!interest.pristine && interest.valid"> B</span>

                <div class="placeholder-container ">
                  <span
                    class="{{
                      interest.pristine || form.interest
                        ? 'placeholder placeholder-top'
                        : 'placeholder'
                    }}"
                  >
                    Interested In
                  </span>
                </div>
                <div
                  *ngIf="!interest.valid && interest.pristine"
                  class="error-message-container"
                >
                  <span class="error-message">Please select your interest</span>
                </div>
              </div>

              <!-- location -->
              <div
                class="{{
                  'input-wrapper-contaier ' +
                    (location.pristine && location.valid
                      ? 'border-blue '
                      : '') +
                    (location.pristine && !location.valid ? 'border-red ' : '')
                }}"
              >
                <!-- <Icon size={18} /> -->
                <input
                  name="location"
                  type="text"
                  id="location"
                  required
                  pattern="^[a-zA-Z0-9àéèç]{1,25}$"
                  [(ngModel)]="form.location"
                  #location="ngModel"
                />
                <span [hidden]="!location.pristine && !location.valid"> G</span>
                <!-- <FaCheck color="green" size={20} /> -->

                <!-- <FaXmark color="red" size={20} /> -->
                <span [hidden]="!location.pristine && location.valid"> B</span>

                <div class="placeholder-container ">
                  <span
                    class="{{
                      location.pristine || form.location
                        ? 'placeholder placeholder-top'
                        : 'placeholder'
                    }}"
                  >
                    Your Location
                  </span>
                </div>
                <div
                  *ngIf="!location.valid && location.pristine"
                  class="error-message-container"
                >
                  <span class="error-message">Please enter your location</span>
                </div>
              </div>

              <!-- whatsapp -->
              <div
                class="{{
                  'input-wrapper-contaier ' +
                    (whatsapp.pristine && whatsapp.valid
                      ? 'border-blue '
                      : '') +
                    (whatsapp.pristine && !whatsapp.valid ? 'border-red ' : '')
                }}"
              >
                <!-- <Icon size={18} /> -->
                <input
                  name="whatsapp"
                  type="tel"
                  required
                  pattern="^[a-zA-Z0-9àéèç]{1,25}$"
                  [(ngModel)]="form.whatsapp"
                  #whatsapp="ngModel"
                />
                <span [hidden]="!location.pristine && !location.valid"> G</span>
                <!-- <FaCheck color="green" size={20} /> -->

                <!-- <FaXmark color="red" size={20} /> -->
                <span [hidden]="!location.pristine && location.valid"> B</span>

                <div class="placeholder-container ">
                  <span
                    class="{{
                      focused.whatsapp || form.whatsapp
                        ? 'placeholder placeholder-top'
                        : 'placeholder'
                    }}"
                  >
                    Whatsapp No
                  </span>
                </div>
                <div
                  *ngIf="!whatsapp.valid && whatsapp.pristine"
                  class="error-message-container"
                >
                  <span class="error-message">Please provide Whatsapp No.</span>
                </div>
              </div>

              <!-- brief -->
              <div
                class="{{
                  'input-wrapper-contaier ' +
                    (brief.pristine && brief.valid ? 'border-blue ' : '') +
                    (brief.pristine && !brief.valid ? 'border-red ' : '')
                }}"
              >
                <!-- <Icon size={18} /> -->
                <textarea
                  name="brief"
                  id="brief"
                  required
                  pattern="^[a-zA-Z0-9àéèç]{1,100}$"
                  [(ngModel)]="form.brief"
                  name="brief"
                  #brief="ngModel"
                ></textarea>
                <span [hidden]="!brief.pristine && !brief.valid"> G</span>
                <!-- <FaCheck color="green" size={20} /> -->

                <!-- <FaXmark color="red" size={20} /> -->
                <span [hidden]="!brief.pristine && brief.valid"> B</span>

                <div class="placeholder-container ">
                  <span
                    class="{{
                      brief.pristine || form.brief
                        ? 'placeholder placeholder-top'
                        : 'placeholder'
                    }}"
                  >
                    Brief about the project
                  </span>
                </div>
                <div
                  *ngIf="!brief.valid && brief.pristine"
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
                <!-- <BiChevronRight color="white" /> -->
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
    "../../about/cards-style.scss"
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
