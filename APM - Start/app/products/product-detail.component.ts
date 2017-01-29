import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from './product.service';
@Component({
    templateUrl: 'app/products/product-detail.component.html'    

})
export class ProductDetailComponent{
    pageTitle:string = 'Product detail';
    product: IProduct;
    

    constructor(private _route :ActivatedRoute,
    private _router : Router,private _productService: ProductService){

    }

    ngOnInit(): void{
        let id = +this._route.snapshot.params['id']; 
        this.pageTitle += `:${id}`
        //this.product = this._productService.getProduct(id);
        this._productService.getProduct(id).subscribe(product =>{
            console.log(product);            
            this.product = <IProduct>product;
            console.log(this.product.description);            
        } ,
        error => this.pageTitle = <any>error
        );
        console.log('++++++++++++++++++++++++++++'); 
        console.log(this.product);
        console.log('++++++++++++++++++++++++++++'); 
        //this._productService.getProducts();

    }

    onBack(): void {
        this._router.navigateByUrl('/products');
    }



}