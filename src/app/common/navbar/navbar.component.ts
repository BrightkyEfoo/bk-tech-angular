import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";

type Link = {
  text: string;
  link?: string;
};
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  // styleUrls: ["./navbar.scss"],
})
export class NavbarComponent implements OnInit {
  links: Link[] = [
    {
      text: "acceuil",
      link: "/",
    },
    {
      text: "about",
      // link : 'about'
    },
    {
      text: "services",
    },
    {
      text: "contact",
    },
  ];
  colorChange: boolean = false;
  isMobile: boolean = false;
  isMobNavVisible: boolean = false;
  constructor(private router: Router, private responsive: BreakpointObserver) {}
  ngOnInit(): void {
    window.addEventListener("scroll", () => {
      this.changeNavbarColor();
    });
    this.responsive.observe("(max-width: 870px)").subscribe((result) => {
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
  goHome() {}
  isActualRoute(el: Link) {
    if (el.link === "/") {
      if (this.router.url === el.link) {
        return true;
      } else {
        return false;
      }
    }
    return this.router.url.includes(el.link ? el.link : "/" + el.text);
  }
  changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      this.colorChange = true;
    } else {
      this.colorChange = false;
    }
  };

  handleMobClick(e : MouseEvent){
      if (e.currentTarget === e.target) {
        this.isMobNavVisible = false
      }
  }
  handleToggleMenu() {
    this.isMobNavVisible = !this.isMobNavVisible;
  }
}
