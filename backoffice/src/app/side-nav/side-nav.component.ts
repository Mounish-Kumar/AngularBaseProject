import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb/breadcrumb.service';
import { AppService } from '../app.service';

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
      notificationCount: 2,
      isVisible: this.isOperationGranted(["OPERATION_1", "OPERATION_2"]),
      subMenu: [
        {
          label: "Sub Menu 1",
          path: "/sub1",
          icon: "pi pi-check",
          notificationCount: 2,
          isVisible: this.isOperationGranted(["OPERATION_1"])
        },
        {
          label: "Sub Menu 2",
          path: "/sub2",
          icon: "pi pi-check",
          notificationCount: 88,
          isVisible: this.isOperationGranted(["OPERATION_2"])
        }
      ]
    },
    {
      label: "Main Menu 2",
      path: "/main2",
      icon: "pi pi-check",
      notificationCount: 88,
      isVisible: this.isOperationGranted(["OPERATION_2"])
    },
    {
      label: "Main Menu 3",
      icon: "pi pi-check",
      notificationCount: 0,
      isVisible: this.isOperationGranted(["OPERATION_3", "OPERATION_4"]),
      subMenu: [
        {
          label: "Sub Menu 3",
          path: "/sub3",
          icon: "pi pi-check",
          notificationCount: 0,
          isVisible: this.isOperationGranted(["OPERATION_3"])
        },
        {
          label: "Sub Menu 4",
          path: "/sub4",
          icon: "pi pi-check",
          notificationCount: 0,
          isVisible: this.isOperationGranted(["OPERATION_4"])
        }
      ]
    },
    {
      label: "Main Menu 4",
      path: "/main4",
      icon: "pi pi-check",
      notificationCount: 0,
      isVisible: this.isOperationGranted(["OPERATION_4"])
    }
  ]

  minimize: boolean = false

  constructor(public app: AppService, private breadcrumb: BreadcrumbService) { }

  ngOnInit(): void {
  }

  toggleMinimize() {
    this.minimize = !this.minimize;
  }

  clearAndAdd(label: string, path: string) {
    this.breadcrumb.trails.length = 0;
    this.breadcrumb.add(label, path);
  }

  isOperationGranted(operations: any) {
    return () => {
      return true;
    }
  }

}
