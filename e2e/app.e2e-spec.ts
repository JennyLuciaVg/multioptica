import { MultiopticaPage } from './app.po';

describe('multioptica App', () => {
  let page: MultiopticaPage;

  beforeEach(() => {
    page = new MultiopticaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
