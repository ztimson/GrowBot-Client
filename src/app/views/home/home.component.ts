import { Component } from '@angular/core';
import {version} from '../../../../package.json';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {filter} from "rxjs/operators";
import {collapseUp, expandDown, routerTransition} from "../../animations";
import {MenuItem} from "../../models/menuItem";

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [collapseUp, expandDown, routerTransition]
})
export class HomeComponent {
  hide = false; // Hide nav
  mobile = true; // Mobile or desktop size
  noTransition = false; // Stop router transitions
  open = false; // Side nav open
  version = version; // Version number from package.json

  menuItems: MenuItem[] = [
    {text: 'Dashboard', icon: 'dashboard'},
    {text: 'Climate', icon: 'spa'},
    {text: 'Light', icon: 'wb_incandescent'},
    {text: 'Water', icon: 'waves'},
    {text: 'Camera', icon: 'videocam'},
    {text: 'Schedule', icon: 'event'},
    {text: 'Settings', icon: 'settings'}
  ]

  constructor(private router: Router, route: ActivatedRoute, breakpointObserver: BreakpointObserver) {
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