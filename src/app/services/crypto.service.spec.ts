import { TestBed, inject } from '@angular/core/testing';

import { CryptoService } from './crypto.service';

describe('CryptoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptoService]
    });
  });

  it('should be created', inject([CryptoService], (service: CryptoService) => {
    expect(service).toBeTruthy();
  }));

  it('should encrypt a message', inject([CryptoService], (service: CryptoService) => {
    const message = 'Test';
    const key = 'test key';

    expect(service.encrypt(message, key)).not.toBe(message);
  }));

  it('should decrypt a message', inject([CryptoService], (service: CryptoService) => {
    const cryptedMsg = "Cq4G8DlLKB90qvhuZBMjcg==";
    const key = 'test key';
    expect(service.decrypt(cryptedMsg, key)).not.toBe(cryptedMsg);
  }))
});
