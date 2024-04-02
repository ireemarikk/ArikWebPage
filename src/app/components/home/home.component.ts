import { AfterViewInit, Component } from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  constructor() {}

  initScrollTrigger() {
    gsap.to('.bottom', {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: '',
        scrub: true,
        start: '60% 60%',
        end: '70% 30%',
      },
    });

    gsap.to('.heading-main', {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: '',
        scrub: true,
        start: '70% 60%',
        end: '85% 30%',
      },
    });

    gsap.to('figure.preview', {
      scrollTrigger: {
        toggleClass: 'active',
        trigger: 'figure.preview',
        start: '50% 80%',
        end: '85% 20%',
      },
    });
  }

  ngAfterViewInit() {
    this.initScrollTrigger();
  }
}
