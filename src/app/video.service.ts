import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Video }  from './video';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class VideoService {
  results: Video[];
  selectedVideo: Video = null;
  constructor (private http: HttpClient, public sanitizer: DomSanitizer) {
  /*
   this.objectsToVideos([
   	{ ID: '',
	    Owner: '',
	    'Issuing Website': 'Uplift.com via FB',
	    'Site of Original Link': 'YouTube',
	    Title: 'Some of the most generous people I know',
	    'Author/Orator': 'Stephen Goldsmith',
	    Genre: '',
	    'Date on Link': '2015-10-24',
	    Link: 'https://www.youtube.com/watch?v=wPLD9FPLgNU&feature=youtu.be',
	    'Description ': undefined,
	    Keyword: undefined
	    }
	    ]);
  */

  }

  objectsToVideos(data) {
    this.results = data.map(item => {
      return new Video(item, this.sanitizer);
    });
  }

  getVideos(term: string) {
    let opts = { headers: { 'Content-Type' : 'application/json' }};
    let body = { params : { search : term } };
    console.log(body);


    return this.http.post('https://arcane-stream-10108.herokuapp.com/search', body, opts)
      .subscribe(
      	res => {
	  console.log(res);
	  this.objectsToVideos(res);
	  console.log(this.results);
	},
	msg => {
	  console.log(msg);
	}
      );
  }
}
