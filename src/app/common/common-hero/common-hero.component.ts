import { Component, Input } from "@angular/core";

@Component({
  selector: "app-common-hero",
  template: `
    <div
      class="common-hero-section-container"
      style="background-image: url('{{ props?.image }}');"
    >
      <div>
        <ul>
          <span routerLink="/">Home</span>
          <li>{{ props?.pageTitle }}</li>
        </ul>
        <h1>{{ props?.title }}</h1>
      </div>
    </div>
  `,
  styleUrls: ["./style.scss"],
})
export class CommonHeroComponent {
  @Input() props:
    | {
        pageTitle: string;
        title: string;
        image: string;
      }
    | undefined;

  // goHome (){

  // }
}
