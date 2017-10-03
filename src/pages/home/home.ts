import { Component , ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MediaCapture , MediaFile , CaptureError } from '@ionic-native/media-capture';
import { VideoPlayer } from '@ionic-native/video-player';
import { Base64 } from '@ionic-native/base64';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('myvideo') myVideo: any;
  videoURL:any;

  constructor(public navCtrl: NavController , private mediaCapture: MediaCapture , private base64 : Base64) {

  }

  startCapture(){
    this.mediaCapture.captureVideo().then((data: MediaFile[])=>{
      
          let videoData = JSON.stringify(data);
          let res1 = JSON.parse(videoData);

          this.videoURL = res1[0]['fullPath'];//videourl
          //Base64 Encoding started
          this.base64.encodeFile(this.videoURL).then((base64File: string) => {
            //Do something with base64File
            console.log(base64File);
            
          },
          (err)=>{
            console.log(err);
          });
          //Base64 end
          let video = this.myVideo.nativeElement;
          video.src =  this.videoURL;
          video.play();
      
      }, (err) => {
        alert('Error');
      });
  }
}
