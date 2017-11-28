import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { VideoDialogComponent } from './video-dialog.component';

import { VideoService } from './video.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    VideoDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [
    BrowserModule
  ],
  providers: [
    VideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
