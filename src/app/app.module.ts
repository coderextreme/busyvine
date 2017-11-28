import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';

import { VideoService } from './video.service';

@NgModule({
  declarations: [
	  AppComponent,
	  SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
