import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from './breadcrumb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor(public service: BreadcrumbService, private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(index: number) {
    const { trails } = this.service;
    if (index < (trails.length - 1)) {
      trails.splice(index + 1);
      this.router.navigate([trails[index].path])
    }
  }

}
