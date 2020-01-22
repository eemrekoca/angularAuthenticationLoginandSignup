import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

import { Router } from '@angular/router'



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: Observable<firebase.User>

  constructor(
    private angularFireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {
    this.userData = angularFireAuth.authState;
   }

   /* SİGN - UP */ 
   signUp(isim: string, email: string, password:string) {
     this.angularFireAuth
     .auth
     .createUserWithEmailAndPassword(email, password)
     .then(res => {
       //tabloya ekleme
       let data = Object.assign({}, {
         name: isim,
         email: email,
         uid: res.user.uid
       });
       this.firestore.collection('users').add(data);
       // users tablosuna ekleme

       console.log("Kayıt Başarılı");
     })
     .catch(error => {
      console.log('Hata: ', error.message);
     });
   }

   /* SİGN İN */
   signIn(email: string, password: string) {
     this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then(res => {
       console.log('Giriş Başarılı');
       this.router.navigate(["dashboard"]);
     })
     .catch(err => {
       console.log('Hata: ', err.message);
     });

   } 

   /* SİGN - OUT */
   SignOut() {
     this.angularFireAuth.auth.signOut();
     this.router.navigate(["dashboard"]);
   } 
  

}

