import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map'
import { CryptoService } from '../services/crypto.service'


@Injectable()
export class UserService {

  user : any = {};

  constructor(
    private http : Http,
    private cryptoService : CryptoService
  ) { }

  signUp(user : any){
    return this.http.post('http://localhost:3000/users',user).map((response : Response)=>{ return response.json()});
  }

  signIn(user : any){
    console.log(user);
    
    return this.http.post('http://localhost:3000/users/login',user,this.jwt() ).map((response : Response)=>{
      let cryptToken = this.cryptoService.encrypt(response.toString(), 'key is 123');
      localStorage.setItem('token', cryptToken);
      return response.json()
    });
  }

  fetch(){
     return this.http.get('http://localhost:3000/users',this.jwt()).map((response : Response)=>{
     });
  }

  logout(){
    localStorage.clear();
  }

  refresh(){
     
  }

  valid(){

  }

  private jwt(){
    //create authorization
    let currentUser = JSON.parse(sessionStorage.getItem('token'))
    // this.cryptoService.decrypt(currentUser,'key is 123');

    if(currentUser && currentUser.token){
      let headers = new  Headers({'Authorization':'Bear ' + currentUser.token});
      return new RequestOptions({headers: headers});
    }

  }



}
