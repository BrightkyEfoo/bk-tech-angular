import { Component } from "@angular/core";

@Component({
  selector: "about-section8",
  template: `
    <div class="about-section-8-container">
      <div class="about-section-8-container-sub">
        <span class="title-red">{{ "about.section8.title" | transloco }}</span>
        <h2 class="title-blue">{{ "about.section8.subTitle" | transloco }}</h2>
        <div>
          <div class="about-card-6" *ngFor="let el of cards">
            <div>
              <img src="{{ el.image }}" alt="" />
            </div>
            <div>
              <h4>{{ el.city | transloco }}</h4>
              <h5>{{ el.officeType | transloco}}</h5>
              <p class="simple-about-p">{{ el.location | transloco }}</p>

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
      city: "about.section8.cards0title",
      image: "../../../assets/images/india-img.png",
      location: "about.section8.cards0text2",
      officeType: "about.section8.cards0text1",
      email: "infos@bk-tech.com",
      phone: "+237612345678",
    },
    {
      city: "about.section8.cards1title",
      image: "../../../assets/images/italy.png",
      location: "about.section8.cards1text2",
      officeType: "about.section8.cards1text1",
      email: "infos@bk-tech.com",
      phone: "+237612345678",
    },
    {
      city: "about.section8.cards2title",
      image: "../../../assets/images/paris.png",
      location: "about.section8.cards2text2",
      officeType: "about.section8.cards2text1",
      email: "infos@bk-tech.com",
      phone: "+237612345678",
    },
  ];
}
