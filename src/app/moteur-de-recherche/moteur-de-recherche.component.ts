import { Component, OnInit} from '@angular/core';
import { ServiceService } from '../service.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-moteur-de-recherche',
  templateUrl: './moteur-de-recherche.component.html',
  styleUrls: ['./moteur-de-recherche.component.css']
})
export class MoteurDeRechercheComponent implements OnInit {

  constructor(private service: ServiceService) { }

  searchName: string;

  products = new Array<Product>();

  ngOnInit(): void {
    
  }

  clickValidation() {

    if (this.searchName != "") {

     this.service.message = this.searchName;
    }
  }

  clickReset() {
    this.searchName = "";
  }

}
