import { FlashChatPage } from './app.po';

describe('flash-chat App', () => {
  let page: FlashChatPage;

  beforeEach(() => {
    page = new FlashChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
