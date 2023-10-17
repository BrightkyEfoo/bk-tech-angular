import { Component } from "@angular/core";

@Component({
  selector: "about-section1",
  template: `
    <div class="about-section-1-container">
      <div class="about-section-1-container-sub">
        <img src="../../../assets/images/company-about.png" alt="company-about" />
        <div>
          <p>{{"about.section1.title" | transloco}}</p>
          <h2>{{"about.section1.subTitle" | transloco}}</h2>
          <p>{{"about.section1.text1" | transloco}}</p>
          <p>{{"about.section1.text2" | transloco}}</p>
          <div>
            <div class="about-card1-container" *ngFor="let el of cards">
              <p>{{ el.text1 }}</p>
              <p>{{ el.text2 | transloco}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../cards-style.scss", "../sections-style.scss"],
})
export class AboutSection1Component {
  cards: { text1: string; text2: string }[] = [
    { text1: "450", text2: "about.section1.text3" },
    { text1: "95k", text2: "about.section1.text4" },
    { text1: "850", text2: "about.section1.text5" },
  ];
}
