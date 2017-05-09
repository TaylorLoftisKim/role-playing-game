import { RolePlayingGamePage } from './app.po';

describe('role-playing-game App', () => {
  let page: RolePlayingGamePage;

  beforeEach(() => {
    page = new RolePlayingGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
