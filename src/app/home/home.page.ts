import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from '../services/info.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router: Router, private infoService: InfoService) {}

  ngOnInit() {
    if (!this.infoService.isProvidedBMI()) {
      this.router.navigateByUrl('/bmi');
    }
  }
}
