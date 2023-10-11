import { Component } from "@angular/core";

@Component({
  selector: "home-section5",
  template: `
    <div>
      <div class="section5-container">
        <div class="section5-container-sub">
          <div class="section5-container-sub-right">
            <h3 class="first-title">SERVICES</h3>
            <p class="second-title">
              Pourquoi <span>BK-TECH</span> est parmis les meilleurs ?
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div class="card-5" *ngFor="let el of cards">
              <div>
                <img src="{{ el.image }}" />
              </div>
              <div>
                <p>{{ el.title }}</p>
                <p>{{ el.text }}</p>
              </div>
            </div>
          </div>
          <div class="section5-container-sub-left">
            <div class="image-container-sec-5">
              <img src="../../../assets/images/about-company.jpg" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <p>Let's Start a <span>New Project</span> Together</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              aliquet ligula nec leo elementum semper.
            </p>
            <button class="outlined-button">
              Request A Quote
              <!-- <MdOutlineArrowForwardIos color="white" /> -->
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../section-style.scss", "../cards-style.scss"],
})
export class Section5Component {
  cards = [
    {
      image: "../../../assets/images/computers2.svg",
      title: "Streamlined Project Management",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper. Mauris aliquet egestas metus.",
    },
    {
      image: "../../../assets/images/deal2.svg",
      title: "Streamlined Project Management",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper. Mauris aliquet egestas metus.",
    },
    {
      image: "../../../assets/images/worker.svg",
      title: "Streamlined Project Management",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper. Mauris aliquet egestas metus.",
    },
  ];
}
