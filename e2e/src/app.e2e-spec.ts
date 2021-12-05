import { AppPage } from './app.po';

describe('Prueba base', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Prueba funcionando', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Start with Ionic UI Components');
  });
});
