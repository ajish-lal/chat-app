import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from "@angular/router";

@Injectable({
    providedIn: "root"
})

export class AuthenticationGuard implements CanLoad, CanActivate {

    constructor(private router: Router) { }
    canLoad(route: Route, segments: UrlSegment[]) {
        let isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true')
            return true;
        else {
            console.log('Not Authenticated in canLoad');
            this.router.navigateByUrl('/login');
            return false;
        }
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true')
            return true;
        else {
            console.log('Not Authenticated in canActivate');
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}