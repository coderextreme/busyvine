import { DomSanitizer } from '@angular/platform-browser';
import { SafeResourceUrlImpl } from '@angular/platform-browser/bundles/platform-browser.umd';

export class Video {
  public src : SafeResourceUrlImpl;
  img : SafeResourceUrlImpl;
  json : object;
  constructor(json: object, sanitizer: DomSanitizer) {

  
    this.src = sanitizer.bypassSecurityTrustResourceUrl(this.getSrc(json)), 
    this.img = sanitizer.bypassSecurityTrustResourceUrl(this.getImg(json)), 
    this.json = json;
  }
  getSrc(vid: object): string {
    // match against youtube URLs
    const ytregExp = /^(https?:\/\/)(.*youtu.?be.*\/)(v\/|u\/\w\/|embed\/|watch\?v=|\&v=|)([^#\&\?]*).*/;
    const ytmatch = vid["Link"].match(ytregExp);
    const fbregExp = /^(https?:\/\/).*facebook\.com.*\/.*\/videos?\/([0-9]+)/;
    const fbmatch = vid["Link"].match(fbregExp);

    let src = 'error';
    if (ytmatch && ytmatch[4].length === 11) {
      src = ytmatch[1] + 'www.youtube.com/embed/' + ytmatch[4];
    } else if (fbmatch) {
      src = fbmatch[1] + 'www.facebook.com/video/embed?video_id=' + fbmatch[2];
    } else {
      src = vid["Link"]; // TODO BAD IDEA
    }
    
    console.log(src);
    return src;
  }
  getImg(vid: object): string {
    // match against youtube URLs
    const ytregExp = /^(https?:\/\/)(.*youtu.?be.*\/)(v\/|u\/\w\/|embed\/|watch\?v=|\&v=|)([^#\&\?]*).*/;
    const ytmatch = vid["Link"].match(ytregExp);
    const fbregExp = /^(https?:\/\/).*facebook\.com.*\/.*\/videos?\/([0-9]+)/;
    const fbmatch = vid["Link"].match(fbregExp);

    let img = 'error';
    if (ytmatch && ytmatch[4].length === 11) {
      img = ytmatch[1] + 'i.ytimg.com/vi/' + ytmatch[4] + '/hqdefault.jpg';
      // } else if (fbmatch) {
    // img = fbmatch[1] + 'www.facebook.com/video/embed?video_id=' + fbmatch[2];
    } else {
      img = vid["Link"]; // TODO BAD IDEA
    }
    
    console.log(img);
    return img;
  }
}

