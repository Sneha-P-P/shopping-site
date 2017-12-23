import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { IProduct } from '../product-list/products';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId : number;
  product: IProduct;
  errMessage: string;
  constructor(private _productService: ProductService, private _route: ActivatedRoute ) {
   
   }

  ngOnInit() {
    let id = this._route.snapshot.params['id'];
    this.productId = id;
    this._productService.getProduct(id).subscribe(product => this.product = product, error => this.errMessage = <any>error);
  }
}
