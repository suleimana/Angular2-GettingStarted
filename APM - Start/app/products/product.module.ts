import {NgModule} from '@angular/core'

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product.filter.pipe';
import { SharedModule } from '../shared/shared.module';

import {ProductService } from './product.service';
import {ProductDeatialGuard} from './product.guard.service'

import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe
    ],
    imports:[
        SharedModule,
        RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id',canActivate:[ProductDeatialGuard], component: ProductDetailComponent}      
    ])
    ],
    providers:[
        ProductDeatialGuard,
        ProductService
        ]
})
export class ProductModule{

}