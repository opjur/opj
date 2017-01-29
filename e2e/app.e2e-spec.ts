import { OpjPage } from './app.po';

describe('opj App', function() {
  let page: OpjPage;

  beforeEach(() => {
    page = new OpjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
