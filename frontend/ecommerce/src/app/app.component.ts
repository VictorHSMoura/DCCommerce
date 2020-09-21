import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public showHeader: boolean = false;

  constructor(
    private router: Router,
  ) { }

  private watchRouteChanges(): void {
    this.router.events.subscribe(
      async () => {
        const url = this.router.url;
        // console.log('url', url);
        if (url === '/' || url === '/login' || url === '/register' || url === '/forgot-password') {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      },
    );
  }

  ngOnInit() {
    this.watchRouteChanges();
  }

}
