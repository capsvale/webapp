import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
    templateUrl: './home.component.html',
    selector: 'app-home',
    styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
    title = 'Swara Chandan Deshmukh';
    theUser: string;
    wrapSlides = true;
    myInterval = 1000;
    cdnVersion = 101;
    images: any = [
        {imageIdentifier: 'sample'},
        {imageIdentifier: 'couple'},
    ];
    constructor(private userSRV: UserService) {}

    ngOnInit() {
        this.theUser = this.userSRV.loggedInUser;
        this.title = this.theUser;
    }

}
