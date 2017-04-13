import { AngularOnARailsApiPage } from './app.po';

describe('angular-on-a-rails-api App', () => {
  let page: AngularOnARailsApiPage;

  beforeEach(() => {
    page = new AngularOnARailsApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
