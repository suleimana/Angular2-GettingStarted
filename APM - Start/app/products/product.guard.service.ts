import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';



@Injectable()
export class ProductDeatialGuard implements CanActivate{

    constructor(private _route: Router){
    }
    canActivate(route: ActivatedRouteSnapshot):boolean {
        
        let id = +route.url[1].path;

        if(isNaN(id) || id < 1){
            alert('Invalid product Id');
            this._route.navigate(['/products']);
            return false;
        }        
        return true;
    }


}