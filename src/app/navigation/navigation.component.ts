import { Component, ElementRef, HostListener, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { Routes, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements AfterViewInit {
  @ViewChild('header') header!: ElementRef;
  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('info') infoContainer!: ElementRef;
  @ViewChild('navbartoggler') navbarToggler!: ElementRef;

  lastScrollTop: number = 0;
  navCollapsed: boolean = true;
  resizeObservable$: Observable<Event>
resizeSubscription$: Subscription
  //public innerWidth:number;

  constructor(private renderer: Renderer2) {
    this.header = new ElementRef(null);
    this.navbar = new ElementRef(null);
    this.infoContainer = new ElementRef(null);
    this.navbarToggler = new ElementRef(null);
    this.resizeObservable$ = new Observable<Event>();
    this.resizeSubscription$ = new Subscription();
    //this.innerWidth = window.innerWidth;
  }

  ngOnInit() {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      console.log('event: ', evt)
      if(window.innerWidth >= 1205 && this.navCollapsed === false){
        this.renderer.setStyle(this.infoContainer.nativeElement, 'display', 'flex');
        this.renderer.setStyle(this.navbar.nativeElement, 'display', 'flex');
      }
    })
}
ngOnDestroy() {
  this.resizeSubscription$.unsubscribe()
}

  ngAfterViewInit() {
    // Ensure this line is removed if using (click) in the template
    //this.navbarToggler.nativeElement.addEventListener('click', this.onTogglerClick.bind(this));
  }
/*
  @HostListener('window:resize', [])
  onResize(){
    this.innerWidth = window.innerWidth;
    if(this.innerWidth >= 1205){
      this.renderer.setStyle(this.infoContainer.nativeElement, 'display', 'flex');
      this.renderer.setStyle(this.navbar.nativeElement, 'display', 'flex');
    }
  }
*/


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollTop > this.lastScrollTop) {
      this.renderer.setStyle(this.header.nativeElement, 'top', '-10%');
      this.renderer.setStyle(this.navbar.nativeElement, 'margin-top', '1.5%');
    } else {
      this.renderer.setStyle(this.header.nativeElement, 'top', '0');
      this.renderer.setStyle(this.navbar.nativeElement, 'margin-top', '0');
    }
    this.lastScrollTop = currentScrollTop;
  }

  public onTogglerClick() {
    console.log('Navbar toggler clicked'); // Debug log
    if (this.navCollapsed === true && window.innerWidth <= 1205) {
      this.renderer.setStyle(this.infoContainer.nativeElement, 'display', 'flex');
      this.renderer.setStyle(this.navbar.nativeElement, 'display', 'flex');
      this.navCollapsed = false;
    } else if(this.navCollapsed === false && window.innerWidth <= 1205) {
      this.renderer.setStyle(this.infoContainer.nativeElement, 'display', 'none');
      this.renderer.setStyle(this.navbar.nativeElement, 'display', 'none');
      this.navCollapsed = true;
    }
  }
  
}