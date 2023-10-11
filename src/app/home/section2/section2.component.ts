import { Component } from "@angular/core";

@Component({
  selector: "home-section2",
  template: `
    <div class="section2-container">
      <div class="section2-container-sub">
        <div>
          <p>
            <span>
              <span>BK-TECH</span>
            </span>
          </p>
          <div>Une entreprise de developpement</div>
          <p>
            Lorem Ipsum is text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. Lorem Ipsum is text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsumis simply dummy text of the printing and typesetting
            industry. Simply dummy text of the printing and typesetting
            industry.
          </p>
          <button class="outlined-button">Request A Quote</button>
        </div>
        <div>
          <div *ngFor="let el of cards" class="{{ el.colorClass + ' card-2' }}">
            <img src="{{ el.image }}" />
            <p>{{ el.text1 }}</p>
            <p>{{ el.text2 }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../section-style.scss","../cards-style.scss"],
})
export class Section2Component {
  cards = [
    {
      image: "../../../assets/images/startup.svg",
      text1: "20+",
      text2: "Years Experience",
      colorClass: "cc-blue",
    },
    {
      image: "../../../assets/images/team.svg",
      text1: "20+",
      text2: "Years Experience",
      colorClass: "cc-blue",
    },
    {
      image: "../../../assets/images/mobile.svg",
      text1: "1200+",
      text2: "Apps Developed",
      colorClass: "cc-purple",
    },
    {
      image: "../../../assets/images/startup.svg",
      text1: "20+",
      text2: "Years Experience",
      colorClass: "cc-green",
    },
    {
      image: "../../../assets/images/team.svg",
      text1: "20+",
      text2: "Years Experience",
      colorClass: "cc-green",
    },
    {
      image: "../../../assets/images/mobile.svg",
      text1: "1200+",
      text2: "Apps Developed",
      colorClass: "cc-purple",
    },
  ];
}
