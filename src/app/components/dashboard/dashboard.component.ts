import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { TraineeService } from '../../services/trainee.service';
import { TraineeComponent } from '../trainee/trainee.component';
import { DataService } from '../../services/data.service';
import { Trainee } from '../../modules/interface_trainee';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule , RouterOutlet , TraineeComponent , ]
})
export class DashboardComponent implements OnInit {
  adminUsername: string | null = '';
  adminId: string | null = '';
  trainees: Trainee[] = [];
  constructor(private route: ActivatedRoute ,private router : Router , private traineeService : TraineeService , private dataService : DataService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.adminUsername = params['username'];
      this.adminId = params['id'];
    });
  }
 
  toSubscription(){
    this.router.navigate(['/subscription'])
   }
   toPayment(){
    this.router.navigate(['/payment'])
   }
   toAdmin(){
    this.router.navigate(['/admin'])
   }

   loadTrainees(): void {
    this.router.navigate(['/trainee'])
  }
  toLogin(){
    this.router.navigate(['/login'])
   }
   toRegister(){
    this.router.navigate(['/register'])
   }
}