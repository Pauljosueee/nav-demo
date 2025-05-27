import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular'; // Agrega NavController
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // No necesitas importar Router si solo usas NavController

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

  goToLogin() {
    this.navCtrl.navigateRoot('/login');
  }

  goToProfile() {
    this.navCtrl.navigateRoot('/profile');
  }
}