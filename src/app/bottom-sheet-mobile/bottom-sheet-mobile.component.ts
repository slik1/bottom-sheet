import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-bottom-sheet-mobile',
  templateUrl: './bottom-sheet-mobile.component.html',
  styleUrls: ['./bottom-sheet-mobile.component.scss']
})
export class BottomSheetMobileComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

  ngOnInit(): void {
  }

}




@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  //templateUrl: 'bottom-sheet-overview-example-sheet.html',
  styleUrls: ['./bottom-sheet-mobile.component.scss'],
  template: `<div class="gesture__zone" (swipe)="onSwipe($event)">
  <div class="handle">
    <div class="handle-affordance"></div>
  </div>
  <mat-nav-list>
  <a href="https://keep.google.com/" mat-list-item (click)="openLink($event)">
  <span mat-line>Google Keep</span>
  <span mat-line>Add to a note</span>
</a>

<a href="https://docs.google.com/" mat-list-item (click)="openLink($event)">
  <span mat-line>Google Docs</span>
  <span mat-line>Embed in a document</span>
</a>

<a href="https://plus.google.com/" mat-list-item (click)="openLink($event)">
  <span mat-line>Google Plus</span>
  <span mat-line>Share with your friends</span>
</a>

<a href="https://hangouts.google.com/" mat-list-item (click)="openLink($event)">
  <span mat-line>Google Hangouts</span>
  <span mat-line>Show to your coworkers</span>
</a>
</mat-nav-list>
</div>`,
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}


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