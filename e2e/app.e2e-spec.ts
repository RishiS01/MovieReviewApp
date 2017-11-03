import { MovieReviewPage } from './app.po';

describe('movie-review App', () => {
  let page: MovieReviewPage;

  beforeEach(() => {
    page = new MovieReviewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
