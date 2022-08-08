import {Component, DoCheck, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  @HostListener('window:scroll', ['$event'])
  doSomething(event: any) {
    // console.debug("Scroll Event", document.body.scrollTop);
    // see András Szepesházi's comment below
    this.coordinate = +window.pageYOffset;
    console.debug(this.coordinate, typeof this.coordinate);
  }

  public isMenuCollapsed = true;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  public coordinate: any = '';
  constructor() { }

  ngOnInit(): void {
  }


  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  ngDoCheck() {

  }

  onScrollDown(ev: any) {

    // add another 20 items
  }

  onUp(ev: any) {
  }
}
