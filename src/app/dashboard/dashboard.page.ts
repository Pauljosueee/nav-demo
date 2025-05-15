import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back();
  }

  goHome() {
    this.navCtrl.navigateRoot('/home');
  }
}
