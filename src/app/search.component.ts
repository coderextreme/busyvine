import { Component } from '@angular/core';
import { Video } from './video';
import { VideoService } from './video.service';

@Component({
  selector: 'app-search-display',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor (public videoService: VideoService) {
  	this.onSubmit(null);
  }
  onSubmit(e) {
    if (e != null) {
      e.stopPropagation();
      e.preventDefault();
    }
    let search = <HTMLInputElement>document.getElementById('search');
    this.videoService.getVideos(search == null ? '' : search.value);
  }
}
