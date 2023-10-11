import { Component } from "@angular/core";

@Component({
  selector: "about-section8",
  template: `
    <div class="about-section-8-container">
      <div class="about-section-8-container-sub">
        <span class="title-red">OUR LOCATIONS</span>
        <h2 class="title-blue">Our Office</h2>
        <div>
          <div class="about-card-6" *ngFor="let el of cards">
            <div>
              <img src="{{ el.image }}" alt="" />
            </div>
            <div>
              <h4>{{ el.city }}</h4>
              <h5>{{ el.officeType }}</h5>
              <p class="simple-about-p">{{ el.location }}</p>

              <p class="simple-about-p" *ngIf="el.email">
                <!-- <FaPhoneAlt />  -->
                <span>{{ el.email }}</span>
              </p>
              <p class="simple-about-p" *ngIf="el.phone">
                <!-- <MdMail />  -->
                <span>{{ el.phone }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../cards-style.scss", "../sections-style.scss"],
})
export class AboutSection8Component {
  cards: {
    city: string;
    officeType: string;
    location: string;
    email?: string;
    phone?: string;
    image: string;
  }[] = [
    {
      city: "Yaounde",
      image: "../../../assets/images/india-img.png",
      location: "232, 21st East Street, Deido, Douala, Cameroun 303030",
      officeType: "Registred Office",
      email: "infos@bk-tech.com",
      phone: "+237612345678",
    },
    {
      city: "Italy",
      image: "../../../assets/images/italy.png",
      location: "232, 21st East Street, Deido, Douala, Cameroun 303030",
      officeType: "Registred Office",
      email: "infos@bk-tech.com",
      phone: "+237612345678",
    },
    {
      city: "Paris",
      image: "../../../assets/images/paris.png",
      location: "232, 21st East Street, Deido, Douala, Cameroun 303030",
      officeType: "Registred Office",
      email: "infos@bk-tech.com",
      phone: "+237612345678",
    },
  ];
}
