import { Component, inject, signal } from '@angular/core';
import { Auth } from '../../services/auth';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [JsonPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

    private authService = inject(Auth);

    public userData = this.authService.userData;
    effect() {
      console.log('User data changed:', this.userData());
    }
}
