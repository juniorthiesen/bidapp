import { Component } from '@angular/core';
import { NavController, Slides, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/modal-lance/modal-lance.html',
})

export class ModalLancePage {
constructor(public viewCtrl: ViewController) {

}

  dismiss() {
    this.viewCtrl.dismiss();
  }

  }
