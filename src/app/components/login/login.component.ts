import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/admin.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone : true , 
  imports : [CommonModule , FormsModule , DashboardComponent]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isLogged :boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  async login(): Promise<void> {
    try {
      const loginData = { email: this.email, password: this.password };
      const response = await this.authService.login(loginData);

      this.isLogged = true;
      this.router.navigate(['/dashboard'], { queryParams: { username: response.username, id: response.id } });
    } catch (error) {
      this.errorMessage = 'Invalid login credentials';
      console.error('Login failed:', error);
    }
  }
}