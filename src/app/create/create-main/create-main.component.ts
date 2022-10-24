import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-create-main',
  templateUrl: './create-main.component.html',
  styleUrls: ['./create-main.component.css']
})
export class CreateMainComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);


  }
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);



}
