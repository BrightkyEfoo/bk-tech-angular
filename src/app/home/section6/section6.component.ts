import { Component, OnDestroy, OnInit } from "@angular/core";
import { data } from "./mock-data";

@Component({
  selector: "home-section6",
  template: `
    <div class="section6-container">
      <div class="section6-container-sub">
        <div class="section6-container-sub-left">
          <p class="first-title">WHAT OUR CLIENTS SAY ABOUT BK-TECH.</p>
          <p class="second-title">Over 1200+ Satisfied Clients and Growing</p>
          <p class="first-title blue-text">Read More Reviews</p>
          <div>
            <!-- <img *ngFor="let el of images" src="{{ el }}" alt="" /> -->
          </div>
        </div>
        <div
          class="section6-container-sub-right"
          id="section6-container-sub-right-slider"
        >
          <!-- {data.map((el, i) => { return <CustomerDetails key="{i}" {...el} />;
          })} -->
          <div class="customer-details-container" *ngFor="let el of data">
            <p>{{ el.text }}</p>
            <img src="{{ el.photo }}" alt="" />
            <div>
              <p class="name">{{ el.name }}</p>
              <p class="poste">{{ el.poste }}</p>
            </div>
            <span>"</span>
          </div>

          <!-- <Pagination lenght="{data.length}" selected="{selected}" /> -->
          <div class="pagination-container">
            <div
              *ngFor="let i of secondArray"
              class="{{
                i === selected ? 'pagination-selected' : 'pagination-simple'
              }}"
            >
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../section-style.scss", "../cards-style.scss", "./style.scss"],
})
export class Section6Component implements OnInit, OnDestroy {
  data = data;
  secondArray = Array(this.data.length)
    .fill(0)
    .map((el, i) => i);
  selected = 0;
  myInter: NodeJS.Timeout | undefined;
  ngOnInit(): void {
    this.myInter = setInterval(() => {
      const ell = document.getElementById(
        "section6-container-sub-right-slider"
      );
      if (this.selected === data.length - 1) {
        this.selected = 0;
      } else {
        this.selected = this.selected + 1;
      }
      ell?.scrollTo({
        top: 0,
        left: this.selected * ell.clientWidth,
        behavior: "smooth",
      });
      // console.log("selected", selected);
    }, 2000);
  }
  ngOnDestroy(): void {
    clearInterval(this.myInter);
  }
}
