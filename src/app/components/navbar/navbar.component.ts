import { AfterViewInit, Component, Input } from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
  constructor() {}


  initScrollTrigger() {
    gsap.to('.nav-list, .bottom', {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.home',
        scrub: true,
        start: '60% 60%',
        end: '70% 30%',
      },
    });
  }

  ngAfterViewInit() {
    this.initScrollTrigger();
  }
  
}
