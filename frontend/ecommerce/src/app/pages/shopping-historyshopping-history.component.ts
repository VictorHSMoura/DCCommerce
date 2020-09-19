import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-history',
  templateUrl: './shopping-history.component.html',
  styleUrls: ['./shopping-history.component.scss']
})
export class ShoppingHistoryComponent implements OnInit {

  constructor(private router: Router) { }

  btnClick() {
      this.router.navigate(['/evaluation']);
  }

  ngOnInit(): void {
  }

}
