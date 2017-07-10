import { CookdPage } from './app.po';

describe('cookd App', () => {
  let page: CookdPage;

  beforeEach(() => {
    page = new CookdPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
