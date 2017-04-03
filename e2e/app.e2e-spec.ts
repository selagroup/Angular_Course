import { AngularDemosPage } from './app.po';

describe('angular-demos App', () => {
  let page: AngularDemosPage;

  beforeEach(() => {
    page = new AngularDemosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
