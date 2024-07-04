import { Component, OnInit , ViewChild } from '@angular/core';
import { Trainee } from '../../modules/interface_trainee';
import { TraineeService } from '../../services/trainee.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainee',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './trainee.component.html',
  styleUrl: './trainee.component.css'
})
export class TraineeComponent implements OnInit {
  trainees: Trainee[] = [];
  selectedTrainee: Trainee | null = null;
  adminId : string  = '';
  subscriptionType: string = '';
  showAddForm: boolean = false;
  @ViewChild('traineeForm') traineeForm!: NgForm;
  constructor(private traineeService: TraineeService , private route: ActivatedRoute ,private router : Router ) { }

  ngOnInit(): void {
    this.loadTrainees();
    this.route.queryParams.subscribe(params => {
     
      this.adminId = params['id'];
    });
  }
  cancelAdd(){
    this.showAddForm = !this.showAddForm;
  }

  loadTrainees(): void {
    
    this.traineeService.getTrainees(this.adminId).subscribe(
      data => {
        this.trainees = data;
      },
      error => {
        console.error('Error loading trainees:', error);
      }
    );
  }

  loadTraineesBySubscription(): void {
    this.traineeService.getTraineesBySubscription(this.adminId, this.subscriptionType).subscribe(
      (data) => {
        this.trainees = data;
      },
      (error) => {
        console.error('Error loading trainees by subscription:', error);
      }
    );
  }

  selectTrainee(trainee: Trainee): void {
    this.selectedTrainee = trainee;
  }


  cancel(): void {
    this.selectedTrainee = null;
  }

  addTrainee(trainee: Trainee): void {
     console.log(this.adminId)
    this.traineeService.addTrainee(trainee).subscribe(() => {
      this.loadTrainees();
      this.traineeForm.resetForm();
    });
  }

  updateTrainee(trainee: Trainee): void {
    if (this.selectedTrainee) {
      this.traineeService.updateTrainee(this.selectedTrainee._id!, trainee).subscribe(() => {
        this.loadTrainees();
        this.selectedTrainee = null;  
      });
    }
  }

  deleteTrainee(id: string): void {
    this.traineeService.deleteTrainee(id).subscribe(() => {
      this.loadTrainees();
      this.selectedTrainee = null;  // Deselect after deletion
    });
  }
  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm; // Toggle form visibility
  }
}