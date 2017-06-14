import { PROJECTPage } from './app.po';

describe('project App', () => {
  let page: PROJECTPage;

  beforeEach(() => {
    page = new PROJECTPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
