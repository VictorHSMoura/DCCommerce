import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  public userName: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userName = this.authService.getUserName();
  }

}
