import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {

  private subject = new Subject<any>();
  private alerts : Array<string> = [];
  // private subject: Array<Subject<any>>

  private keepAfterNavigationChange = false;

  constructor(private router: Router) {

    //clear alert messagens on route change
    router.events.subscribe(event=>{
      if(event instanceof NavigationStart){
        if(this.keepAfterNavigationChange){
          this.keepAfterNavigationChange = false;
        }
        else{
          //Clear alert
          this.subject.next();
        }
      }
    })
   }

   success(message: string, keepAfterNavigationChange = false){
    this.addElement(message); 
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', text: message }); 
    }
   

  error(message: string, keepAfterNavigationChange = false) {
    console.log({message});
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
        this.addElement(message)
      }
 

  addElement(info: string){
    const valid = this.alerts.indexOf(info) >-1;
    if(!valid){
      this.alerts.push(info);
    }
  } 

  removeElement(info : string){
    this.alerts.splice(this.alerts.indexOf(info),1);
  }
  
  



  getMessage(): Observable<any[]> {
      return this.subject.asObservable();
  }
  
  getMessageALL(): Observable<any[]> {
     return Observable.of(this.alerts)
   }

    clearMessage(): Observable<any>{
      return this.subject
    }
}
