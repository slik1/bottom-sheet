import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-mobile',
  templateUrl: './bottom-sheet-mobile.component.html',
  styleUrls: ['./bottom-sheet-mobile.component.scss']
})
export class BottomSheetMobileComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetContent);
  }

  ngOnInit(): void {
  }

}




@Component({
  selector: 'bottom-sheet-content',
  //templateUrl: 'bottom-sheet-overview-example-sheet.html',
  styleUrls: ['./bottom-sheet-mobile.component.scss'],
  template: `<div class="gesture__zone" (pan)="onSwipe($event)">
  <div class="handle">
    <div class="handle-affordance"></div>
  </div>
  <mat-nav-list>
    <a href="https://keep.google.com/" mat-list-item (click)="openLink($event)">
      <span mat-line>Edit group</span>
    </a>
    <a href="https://keep.google.com/" mat-list-item (click)="openLink($event)">
      <span mat-line>Delete group</span>
    </a>
  </mat-nav-list>
</div>`,
})
export class BottomSheetContent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetContent>) {}


  eventText = '';

  onSwipe(evt) {
      const x = Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 'right' : 'left'):'';
      const y = Math.abs(evt.deltaY) > 40 ? (evt.deltaY > 0 ? 'down' : 'up') : '';


    if(y == 'down'){
      this._bottomSheetRef.dismiss();
    }

      this.eventText += `${x} ${y}<br/>`;
      
  }


  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}