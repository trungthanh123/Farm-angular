import { FarmPage } from './app.po';

describe('farm App', () => {
  let page: FarmPage;

  beforeEach(() => {
    page = new FarmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
