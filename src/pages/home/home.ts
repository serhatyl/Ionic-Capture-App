import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MediaCapture , MediaFile , CaptureError } from '@ionic-native/media-capture';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  videoUrl:any;

  constructor(public navCtrl: NavController , private mediaCapture: MediaCapture) {

  }

  startCapture(){
    this.mediaCapture.captureVideo()
    .then(
      /* (re:MediaFile[])=>{this.videoUrl=re[0].fullPath, */
      (data: MediaFile[]) => this.videoUrl=data[0].fullPath,
      (err: CaptureError) => console.error(err)
      );
  }
}
