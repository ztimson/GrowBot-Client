import {Component, HostBinding} from '@angular/core';
import {version} from '../../../package.json';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {filter} from "rxjs/operators";
import {collapseUp, expandDown, routerTransition} from "../animations";
import {MenuItem} from "../models/menuItem";
import {LocalStorage} from "../utils/webStorage";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [collapseUp, expandDown, routerTransition]
})
export class AppComponent {
  // Theme
  private body = document.getElementsByTagName('body')[0];
  @LocalStorage({defaultValue: false}) private _darkMode: boolean;
  get darkMode(): boolean { return this._darkMode; }
  set darkMode(val: boolean) {
    this._darkMode = val;
    this.body.className = val ? 'dark-theme' : 'light-theme';
  }

  hide = false; // Hide nav
  mobile = true; // Mobile or desktop size
  noTransition = false; // Stop router transitions
  open = false; // Side nav open
  version = version; // Version number from package.json

  menuItems: MenuItem[] = [
    {text: 'Dashboard', icon: 'dashboard', link: '/'},
    {text: 'Climate', icon: 'eco', link: '/climate'},
    {text: 'Water', icon: 'waves', link: '/water'},
    {text: 'Camera', icon: 'videocam', link: '/camera'},
    {text: 'GrowOps', icon: 'spa', link: '/growops', sub: [
        {text: 'Schedule', icon: 'event', link: '/schedule'},
        {text: 'Notes', icon: 'notes', link: '/notes'},
    ]},
    {text: 'Settings', icon: 'settings', link: '/settings'},
  ]

  constructor(private router: Router, route: ActivatedRoute, breakpointObserver: BreakpointObserver) {
    this.darkMode = this._darkMode;
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.hide = route.root.firstChild != null ? !!route.root.firstChild.snapshot.data.hide : false;
      this.open = !this.hide && !this.mobile;
    });

    breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).subscribe(result => {
      this.mobile = result.matches;
      this.open = !this.mobile;
    })
  }

  transition(outlet) {
    if(!outlet.isActivated || !!outlet.activatedRouteData.noAnimation || this.noTransition) return '';
    return outlet.activatedRoute;
  }
}
