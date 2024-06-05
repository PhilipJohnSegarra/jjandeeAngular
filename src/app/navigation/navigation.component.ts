import { Component, ElementRef, HostListener, Renderer2, ViewChild, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { Routes, RouterLink, RouterLinkActive } from '@angular/router';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('header') header!: ElementRef;
  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('info') infoContainer!: ElementRef;
  @ViewChild('navbartoggler') navbarToggler!: ElementRef;

  lastScrollTop: number = 0;
  navCollapsed: boolean = true;
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;

  constructor(private renderer: Renderer2) {
    this.resizeObservable$ = new Observable<Event>();
    this.resizeSubscription$ = new Subscription();
  }

  ngOnInit() {
    if (this.isBrowser()) {
      this.resizeObservable$ = fromEvent(window, 'resize');
      this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
        console.log('event: ', evt);
        if (window.innerWidth >= 1205 && this.navCollapsed === true) {
          this.renderer.setStyle(this.infoContainer.nativeElement, 'display', 'flex');
          this.renderer.setStyle(this.navbar.nativeElement, 'display', 'flex');
        }
        else if(window.innerWidth <= 1205){
          this.navCollapsed = true;
          this.renderer.setStyle(this.infoContainer.nativeElement, 'display', 'none');
          this.renderer.setStyle(this.navbar.nativeElement, 'display', 'none');
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.isBrowser()) {
      this.resizeSubscription$.unsubscribe();
    }
  }

  ngAfterViewInit() {
    // Ensure this line is removed if using (click) in the template
    //this.navbarToggler.nativeElement.addEventListener('click', this.onTogglerClick.bind(this));
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.isBrowser()) return;

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
    } else if (this.navCollapsed === false && window.innerWidth <= 1205) {
      this.renderer.setStyle(this.infoContainer.nativeElement, 'display', 'none');
      this.renderer.setStyle(this.navbar.nativeElement, 'display', 'none');
      this.navCollapsed = true;
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }
}
