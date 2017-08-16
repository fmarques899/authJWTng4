import { AuthJWTng4Page } from './app.po';

describe('auth-jwtng4 App', () => {
  let page: AuthJWTng4Page;

  beforeEach(() => {
    page = new AuthJWTng4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
