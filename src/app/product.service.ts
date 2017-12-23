import { Injectable } from '@angular/core';
import { IProduct } from './product-list/products';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

  private _productUrl = 'assets/products.json';

  constructor(private _http: Http) { }

  getProducts() : Observable<IProduct[]> {
    return this._http.get(this._productUrl).map((response : Response) => <IProduct[]>response.json())
            .do(data => console.log('All:'+ JSON.stringify(data)))
            .catch(this.handleError);
  }

  getProduct(id: number): Observable<IProduct>{
    return this._http.get(this._productUrl)
    .map((response : Response) => <IProduct[]>response.json().find(p => p.productId == id))
            .do(data => console.log('All:'+ JSON.stringify(data)))
            .catch(this.handleError);
  }

  private handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

// getProducts(): Observable<IProduct[]> {
//   return this._http.get<IProduct[]>(this._productUrl)
//       .do(data => console.log('All: ' + JSON.stringify(data)))
//       .catch(this.handleError);
// }

// getProduct(id: number): Observable<IProduct> {
//   return this.getProducts()
//       .map((products: IProduct[]) => products.find(p => p.productId === id));
// }