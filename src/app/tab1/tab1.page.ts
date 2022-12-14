import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  @ViewChild(IonModal) modal: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';

  cancel() {
    this.modal.dismiss('cancel');
  }
  confirm() {
    this.modal.dismiss('confirm');
  }

}
