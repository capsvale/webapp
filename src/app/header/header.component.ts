import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    routeName;

    myFunction(): any  {
        let x = document.getElementById('myTopnav');
        if (x.className === 'topnav') {
            x.className += ' responsive';
        } else {
            x.className = 'topnav';
        }
    }

    menuClicked(route): any {
        this.routeName = route;
    }
}


