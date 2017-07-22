import { XfinityChallengePage } from './app.po';

describe('xfinity-challenge App', function() {
  let page: XfinityChallengePage;

  beforeEach(() => {
    page = new XfinityChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
