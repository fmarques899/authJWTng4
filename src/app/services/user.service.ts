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
    let ui : any
    ui = {user}

    return this.http.post('http://localhost:3000/users',ui).map((response : Response)=>
    {
      response.json();
    }
    );

  }

  signIn(user : any){
    return this.http.get('http://jsonplaceholder.typicode.com/users',user ).map((response : Response)=>{
    let cryptToken = this.cryptoService.encrypt(response.toString(), 'key is 123');
    localStorage.setItem('token', cryptToken);

    return response;
  }, error => {

  });

  }

  fetch(){
     return this.http.get('https://jsonplaceholder.typicode.com/users',this.jwt).map((response : Response)=>{
      //Set information for user in
  });

  }

  logout(){

  }

  refresh(){
     
  }

  valid(){

  }

  private jwt(){
    //create authorization
    let currentUser = JSON.parse(sessionStorage.getItem('token'))
    this.cryptoService.decrypt('token',currentUser);

    if(currentUser && currentUser.token){
      let headers = new  Headers({'Authorization':'Bear ' + currentUser.token});
      return new RequestOptions({headers: headers});
    }

  }



}
