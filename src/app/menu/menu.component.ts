import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {

    menujson = ['Menu1', 'Menu2', 'Menu2'];
    selectedRoute: string;
    isExpanded: boolean;
    constructor(private router: Router) {
        this.isExpanded = true;
    }

    clickedMenu() {
        

    }

    clicked(event) {
        this.isExpanded = !this.isExpanded;
        switch (event.target.innerHTML) {
            case 'Technology': {
                this.selectedRoute = '/tech';
                this.router.navigateByUrl('/tech');
                break;
            }
            case 'Architecture': {
                this.selectedRoute = '/arch';
                this.router.navigate(['/arch']);
                break;
            }
            case 'Consultancy': {
                this.selectedRoute = '/consult';
                this.router.navigate(['/consult']);
                break;
            }
            case 'About us': {
                this.selectedRoute = '/about';
                this.router.navigate(['/about']);
                break;
            }
            case 'Reach us': {
                this.selectedRoute = '/reach';
                this.router.navigate(['/reach']);
                break;
            }
            default: {
                this.selectedRoute = '';
                this.router.navigate(['']);
                break;
            }
        }
        
        

    }
}
