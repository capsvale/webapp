import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component ({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    email: string;
    password1: string;
    passwordFailed: boolean;

    constructor(private userSVC: UserService, private router: Router) {}

    login() {
        this.userSVC.login(this.email, this.password1);
        this.userSVC.verifyUser();
    }

    signup() {
        this.router.navigate(['/reach-us']);
    }

    cancel() {
        this.router.navigate(['']);
    }
}
