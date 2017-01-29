import { Injectable } from '@angular/core';

import { IProduct } from './product';

import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';



@Injectable()
export class ProductService {
    private product_url = 'api/products/products.json';

    constructor(private _http: Http) {
    }
    getProducts(): Observable<IProduct[]> {
        return this._http.get(this.product_url)
        .map((response : Response) => <IProduct[]>response.json())
        .do(data => console.log('All:' + JSON.stringify(data)))
        .catch(this.handleError)
        ;
    }
    getProduct(id :number) :Observable<IProduct>{
        return this._http.get(this.product_url)
        .map((response : Response) => {
            let prs = <IProduct[]>response.json();
            let pr = prs.find(product => product.productId == id );            
            return pr;
        }).do(data => console.log('product:' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');        
    }
}