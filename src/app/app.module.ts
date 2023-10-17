import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./common/navbar/navbar.component";
import { FooterComponent } from "./common/footer/footer.component";
import { Button3Component } from "./common/button3/button3.component";
import { HomeComponent } from "./pages/home/home.component";
import { HeroSectionComponent } from "./home/hero-section/hero-section.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Section2Component } from "./home/section2/section2.component";
import { Section3Component } from "./home/section3/section3.component";
import { Section4Component } from "./home/section4/section4.component";
import { Section5Component } from "./home/section5/section5.component";
import { Section6Component } from "./home/section6/section6.component";
import { Section1Component } from "./home/section1/section1.component";
import { register } from "swiper/element/bundle";
import { AboutComponent } from "./pages/about/about.component";
import { CommonHeroComponent } from "./common/common-hero/common-hero.component";
import { AboutSection1Component } from "./about/section1/section1.component";
import { AboutSection2Component } from "./about/section2/section2.component";
import { AboutSection3Component } from "./about/about-section3/about-section3.component";
import { AboutSection4Component } from "./about/about-section4/about-section4.component";
import { AboutSection5Component } from "./about/about-section5/about-section5.component";
import { AboutSection6Component } from "./about/about-section6/about-section6.component";
import { AboutSection7Component } from "./about/about-section7/about-section7.component";
import { AboutSection8Component } from "./about/about-section8/about-section8.component";
import { ServicesComponent } from "./pages/services/services.component";
import { ServicesSection1Component } from "./services/services-section1/services-section1.component";
import { ServicesSection2Component } from "./services/services-section2/services-section2.component";
import { ServicesSection3Component } from "./services/services-section3/services-section3.component";
import { ServicesSection4Component } from "./services/services-section4/services-section4.component";
import { ServicesSection5Component } from "./services/services-section5/services-section5.component";
import { ServicesSection6Component } from "./services/services-section6/services-section6.component";
import { ServicesSection7Component } from "./services/services-section7/services-section7.component";
import { ServicesSection8Component } from "./services/services-section8/services-section8.component";
import { ServicesSection9Component } from "./services/services-section9/services-section9.component";
import { ServicesSection10Component } from "./services/services-section10/services-section10.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ContactSection1Component } from "./contact/contact-section1/contact-section1.component";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';

register();

export interface SwiperCard1 {
  text: string;
  image: string;
  colorClass: string;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    Button3Component,
    HomeComponent,
    HeroSectionComponent,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section1Component,
    AboutComponent,
    AboutSection1Component,
    AboutSection2Component,
    CommonHeroComponent,
    AboutSection3Component,
    AboutSection4Component,
    AboutSection5Component,
    AboutSection6Component,
    AboutSection7Component,
    AboutSection8Component,
    ServicesComponent,
    ServicesSection1Component,
    ServicesSection2Component,
    ServicesSection3Component,
    ServicesSection4Component,
    ServicesSection5Component,
    ServicesSection6Component,
    ServicesSection7Component,
    ServicesSection8Component,
    ServicesSection9Component,
    ServicesSection10Component,
    ContactComponent,
    ContactSection1Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslocoRootModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
