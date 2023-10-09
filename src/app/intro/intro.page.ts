import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { InfoService } from '../services/info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  constructor(
    private appComponent: AppComponent,
    private router: Router,
    private infoService: InfoService
  ) {}

  ngOnInit() {
    this.appComponent.showTabs = false;
    if (this.infoService.isProvidedBMI()) {
      this.router.navigateByUrl('/home');
    }
  }
}
