import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/interface/prodotto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.page.html',
  styleUrls: ['./dettagli.page.scss'],
})
export class DettagliPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  prodotto: Prodotto;

  ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      const a = params['p'];
      console.log(a);
    });
  }

  editButtonPressed(){
    this.goToAddProductForm();
  }

  private async goToAddProductForm(){
    
  }


}
