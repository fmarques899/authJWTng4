import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map'
import { CryptoService } from '../services/index';
import { Router } from '@angular/router';
import { KJUR } from 'jsrsasign/lib/jsrsasign';

@Injectable()
export class UserService {

  user : any = {};

  constructor(
    private http : Http,
    private cryptoService : CryptoService,
    private router: Router
  ) { }

  signUp(user : any){
    return this.http.post('http://localhost:3000/users',user).map((response : Response)=>{ return response.json()});
  }

  signIn(user : any){
    return this.http.post('http://localhost:3000/users/login',user,this.jwt() ).map((response : Response)=>{

      return response.json()
    });
  }

  fetch(){
        let jwt = this.cryptoService.decrypt(localStorage.getItem("token"),'Yi Mobile');

        console.log(jwt);
        let sendjwt ={
          jwt: jwt
         }

        if (this.valid(sendjwt.jwt)) {
          return this.http.post('http://localhost:3000/users/fetch',sendjwt,this.jwt()).map((response : Response)=>{
            return response.json()
          });
        }else{
          if(this.renewable()){
            this.refresh();
            console.log("renewable");
           }else{
            console.log("not renewable");
            this.router.navigate([''])
          }
     }
  }

  logout(){
    localStorage.clear();
    this.router.navigate([''])
  }

  refresh(){
    console.log("refresh");
  }

  valid(cryptedToken: string){
    let isValidToken = false;
    let decryptedToken = this.cryptoService.decrypt(cryptedToken, 'Yi Mobile');

    isValidToken = KJUR.jws.JWS.verifyJWT(decryptedToken, 'Yi Mobile', {alg: ['HS256']});
    return isValidToken;

  }

  renewable() {
    console.log("renewable");
    return true
  }

  private jwt(){
    //create authorization
    let currentUser = JSON.parse(sessionStorage.getItem('token'))
    if(currentUser && currentUser.token){
      let headers = new  Headers({'Authorization':'Bear ' + currentUser.token});
      return new RequestOptions({headers: headers});
    }

  }



}
