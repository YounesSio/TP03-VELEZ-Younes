import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from '../service.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private service: ServiceService) { }
  observable: Observable<any>;
  tabData: Array<String> = [];
  products = new Array<Product>();

  searchName: string = "";

  ngOnInit(): void {
    // Dans le chargement on ne met pas le filtre
    this.service.getData().subscribe(response => {
      this.products = response.map(item => {
        return new Product(
          item.id,
          item.name,
          item.price
        );
      });

    });
  };

  clickValidation() {
    console.log(this.service.message);
    if (this.service.message !== "") {
      this.service.getData().subscribe(response => {
        this.products = response.filter(product => product.name == this.service.message)
      });
    }
  }

}


