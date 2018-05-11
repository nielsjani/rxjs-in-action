import { RxjsInActionPage } from './app.po';

describe('rxjs-in-action App', () => {
  let page: RxjsInActionPage;

  beforeEach(() => {
    page = new RxjsInActionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
