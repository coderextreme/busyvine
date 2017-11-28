import { Component, Input } from '@angular/core';
import { VideoService } from './video.service';
import { Video } from './video';

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
