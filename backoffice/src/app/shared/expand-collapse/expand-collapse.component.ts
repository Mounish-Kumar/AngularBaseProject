import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'expand-collapse',
  templateUrl: './expand-collapse.component.html',
  styleUrls: ['./expand-collapse.component.scss'],
})
export class ExpandCollapseComponent implements OnInit {
  @ViewChild('cc')
  content!: ElementRef;

  contentHeight: number = 0;

  collapse: boolean = true;

  @Input() hideArrow: boolean = false;

  @Input() leftArrow: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.contentHeight = this.content.nativeElement.scrollHeight;
  }

  toggle() {
    this.collapse = !this.collapse;
  }
}
