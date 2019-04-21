import { Injectable } from '@angular/core';

import { CanActivate,
            Router,
            ActivatedRouteSnapshot,
            RouterStateSnapshot} from '@angular/router';

            import * as firebase from 'firebase';



@Injectable()
export class UserService implements CanActivate {

    userloggedIn = false;
    loggedInUser: string;
    authUser: any;

    constructor( private router: Router ) {
  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyCzRWwuJTIYdzx9Ae4NbAFD-Q4-yQ41nRA',
    authDomain: 'capsvale-5b0f7.firebaseapp.com',
    databaseURL: 'https://capsvale-5b0f7.firebaseio.com',
    projectId: 'capsvale-5b0f7',
    storageBucket: 'capsvale-5b0f7.appspot.com',
    messagingSenderId: '546150680942'
  };
  firebase.initializeApp(config);

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        return this.verifyLogin(url);
    }

    verifyLogin(url: string): boolean {
        if (this.userloggedIn) { return true; }

        this.router.navigate(['/login']);
        return false;
    }

    register(email: string, password: string ){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function(error){
            alert('${error.message} Please try again!');
        });
    }

    verifyUser() {

        this.authUser = firebase.auth().currentUser;

        if ( this.authUser ){
            alert('Welcome ${this.authUser.email}');
            this.loggedInUser = this.authUser.email;
            this.userloggedIn = true;
            this.router.navigate(['']);
        }
    }

    login(loginEmail: string, loginPassword: string){
        firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
        .catch(function(error){
            alert('${error.message} Login Failed! Please try again!');
        });
    }

    logout() {
        firebase.auth().signOut().then(function() {
            this.loggedInUser = '';
            this.userloggedIn = false;
            this.authUser = null;
            alert('Logged out!');
        }, function(error){
            alert('${error.message} Unable to logout. Try again!');
        });
    }
}
