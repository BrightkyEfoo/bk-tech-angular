import { Component } from "@angular/core";

@Component({
  selector: "about-section2",
  template: `
    <div class="about-section-2-container">
      <div class="about-section-2-container-sub">
        <div>
          <img src="../../../assets/images/cheerful-businessman.jpg" />
        </div>
        <div>
          <span>{{"about.section2.title" | transloco}}</span>
          <h2>{{"about.section2.subTitle" | transloco}}</h2>
          <p>{{"about.section2.text1" | transloco}}</p>
          <p>{{"about.section2.text2" | transloco}}</p>
          <button class="quote-button">
            {{"about.section2.button" | transloco}}
            <span class="circle"></span>
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../cards-style.scss", "../sections-style.scss"],
})
export class AboutSection2Component {}
