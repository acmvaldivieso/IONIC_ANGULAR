import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navegar(page){
    this.router.navigate(page);
  }
}
