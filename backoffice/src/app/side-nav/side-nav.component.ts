import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb/breadcrumb.service';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  user = {
    name: "Mounish Kumar V",
    code: "GBS04420"
  }

  menu = [
    {
      label: "Main Menu 1",
      icon: "pi pi-check",
      subMenu: [
        {
          label: "Sub Menu 1",
          path: "/sub1",
          icon: "pi pi-check",
        },
        {
          label: "Sub Menu 2",
          path: "/sub2",
          icon: "pi pi-check",
          isVisible: () => false
        }
      ]
    },
    {
      label: "Main Menu 2",
      path: "/main2",
      icon: "pi pi-check",
      isVisible: () => false
    },
    {
      label: "Main Menu 3",
      icon: "pi pi-check",
      subMenu: [
        {
          label: "Sub Menu 4",
          path: "/sub4",
          icon: "pi pi-check"
        },
        {
          label: "Sub Menu 5",
          path: "/sub5",
          icon: "pi pi-check"
        }
      ]
    }
  ]

  minimize: boolean = false

  constructor(private breadcrumb: BreadcrumbService) { }

  ngOnInit(): void {
  }

  toggleMinimize() {
    this.minimize = !this.minimize;
  }

  clearAndAdd(label: string, path: string) {
    this.breadcrumb.trails.length = 0;
    this.breadcrumb.add(label, path);
  }

}
