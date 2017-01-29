import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({    
    moduleId: module.id,
    templateUrl: 'product-List.component.html',
    styleUrls: ['product-List.component.css']
})
export class ProductListComponent implements OnInit {


    errorMessage: string;
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    toggleImage(): void {
        this.showImage = !this.showImage;
    };

    constructor(private _productService: ProductService){

    }
    ngOnInit(): void {
        console.log('in component init ..... ')
        this._productService.getProducts().subscribe(products => this.products = products,
        error => this.errorMessage = <any>error
        );   
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;

    }
}