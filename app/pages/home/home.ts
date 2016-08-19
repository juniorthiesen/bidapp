import { Component } from '@angular/core';
import { Page, NavController, Slides, ModalController } from 'ionic-angular';
import { ModalLancePage } from '../modal-lance/modal-lance';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  mySlideOptions = {
    initialSlide: 0,
    loop: false,
    pager:true
  };

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController) {
}

openModal(){
  let modal = this.modalCtrl.create(ModalLancePage);
  modal.present();
}



}
