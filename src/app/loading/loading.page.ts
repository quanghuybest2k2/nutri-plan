import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  constructor(private router: Router, private appComponent: AppComponent) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/home');
      this.appComponent.showTabs = true;
    }, 2000); // 2s
  }
}
