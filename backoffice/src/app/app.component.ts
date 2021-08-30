import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { BreadcrumbService } from './breadcrumb/breadcrumb.service';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public app: AppService, private router: Router, private breadcrumb: BreadcrumbService) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.app.showLoader = true;
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.app.showLoader = false;
      }
    });
  }

  ngOnInit(): void {
    this.breadcrumb.add("Dashboard", this.router.url);
  }

}
