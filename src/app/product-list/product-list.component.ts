import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle = " Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = '';
  products: IProduct[];
  errorMessage: string;
  constructor( private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProduct()
    .subscribe(products => this.products = products,
    error => this.errorMessage = <any>error);
  }

  toggle(): void{
    this.showImage = !this.showImage; 
  }
  onRatingClicked(message: string): void {
    this.pageTitle = this.pageTitle + message;
  }
}
