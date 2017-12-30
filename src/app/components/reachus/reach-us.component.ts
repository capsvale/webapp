import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: 'reach-us.component.html',
    styleUrls: ['reach-us.component.css'],
    selector: 'app-register'
})

export class ReachUsComponent {
    email: string;
    password1: string;
    password2: string;
    passwordFailed: boolean = false;

    constructor(private userSVC: UserService, private router: Router){}

    signup(){
        if (this.password1 !== this.password2) {
            this.passwordFailed = true;
        }else {
            this.passwordFailed = false;
            this.userSVC.register(this.email, this.password1);
            this.userSVC.verifyUser();
            this.router.navigate(['']);
        }
    }

    cancel() {
        this.router.navigate(['']);
    }
}


