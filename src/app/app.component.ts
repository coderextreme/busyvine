import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Busyvine';
  constructor(private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.ref.markForCheck();
    }, 2000);
  }
}
