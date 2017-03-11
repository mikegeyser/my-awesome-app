import { MyAwesomeAngularAppPage } from './app.po';

describe('my-awesome-angular-app App', () => {
  let page: MyAwesomeAngularAppPage;

  beforeEach(() => {
    page = new MyAwesomeAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
