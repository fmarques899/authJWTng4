import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class CryptoService {

  constructor() { }

  encrypt(cryptMethod: any) {
    console.log('Oi');
  }

  decrypt(cryptMethod) {
    console.log('Oi');
  }
}
