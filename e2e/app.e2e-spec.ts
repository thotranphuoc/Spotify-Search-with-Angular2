import { SpotifySearchWithNG2Page } from './app.po';

describe('spotify-search-with-ng2 App', function() {
  let page: SpotifySearchWithNG2Page;

  beforeEach(() => {
    page = new SpotifySearchWithNG2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
