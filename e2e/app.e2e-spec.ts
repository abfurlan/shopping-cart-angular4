import { NgProjectPage } from './app.po';

describe('ng-project App', () => {
  let page: NgProjectPage;

  beforeEach(() => {
    page = new NgProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
