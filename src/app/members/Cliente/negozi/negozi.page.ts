import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-negozi',
  templateUrl: './negozi.page.html',
  styleUrls: ['./negozi.page.scss'],
})
export class NegoziPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }



  goToProdotti() {
    this.router.navigate(['../prodotti']);
  }

}
