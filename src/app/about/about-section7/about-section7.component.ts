import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "about-section7",
  template: `
    <div class="about-section-7-container">
      <div class="about-section-7-container-sub">
        <h2 class="title-blue">{{ "about.section7.title" | transloco }}</h2>
        <p class="simple-about-p">
          {{ "about.section7.subTitle" | transloco }}
        </p>
        <div
          class="about-section7-container-slider"
          id="about-section7-container-slider"
        >
          <div
            *ngFor="let el of data"
            class="customer-details-container-about-section-7"
          >
            <img src="{{ el.photo }}" alt="" />
            <div>
              <p class="title-blue">{{ el.name }}</p>
              <p class="title-red">{{ el.poste }}</p>
              <p class="simple-about-p">{{ el.text | transloco }}</p>
            </div>
          </div>
          <div class="pagination-container-about-section-7">
            <div
              *ngFor="let subEl of subArray"
              class="{{
                subEl === selected ? 'pagination-selected' : 'pagination-simple'
              }}"
            >
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../cards-style.scss", "../sections-style.scss", "./style.scss"],
})
export class AboutSection7Component implements OnInit, OnDestroy {
  data = [
    {
      text: `about.section7.cards0desc`,
      photo: "../../../assets/images/team-single.jpg",
      name: "bikos maximus",
      poste: "CEO",
    },
    {
      text: `about.section7.cards1desc`,
      photo: "../../../assets/images/team-single.jpg",
      name: "bikos maximus",
      poste: "CEO",
    },
  ];
  selected = 0;
  subArray = Array(this.data.length)
    .fill(0)
    .map((el, i) => i);
  myInter: NodeJS.Timeout | undefined;
  ngOnInit(): void {
    this.myInter = setInterval(() => {
      const ell = document.getElementById("about-section7-container-slider");

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
      console.log("selected", this.selected);
    }, 2000);
  }
  ngOnDestroy(): void {
    clearInterval(this.myInter);
  }
}
