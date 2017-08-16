import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import * as crypto from 'crypto-js';

@Injectable()
export class CryptoService {

  constructor() { }

  encrypt(message: string, key: string) {
    return crypto.AES.encrypt(message, key).toString();
  }

  decrypt(cryptedMessage: string, key: string) {
    return crypto.AES.decrypt(cryptedMessage, key).toString(crypto.enc.Utf8);
  }
}
