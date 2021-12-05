import { browser, element, by } from "protractor";

describe('Pruebas en el login', () => {
    
    beforeEach(() => {
        browser.get('/login');
    });
    // debe existir usuario y contraseña
    it('Login posee usuario y contraseña', () => {
        expect(element(by.id('.page-selected usuario contrasena')).getText()).toContain('Usuario', 'Contraseña');
    });

    // prueba del login
    it('Botón de inicio de sesión encontrado', () => {
        expect(element(by.css('.page-selected ion-button')).getText()).toContain('INICIAR SESION');
    });

    //el usuario navega a la page PASS y comprueba que el botón RECUPERAR existe
    it('Navegación y botón funcionando', () => {
        element(by.id('recuperar')).click();
        browser.driver.sleep(500);
        expect(element(by.css('.page-selected ion-button')).getText()).toContain('RECUPERAR');
    });
});

describe('Pruebas Welcome', () => {
    
    beforeEach(() => {
        browser.get('/welcome');
    });

    // prueba del Welcome
    it('Botón de ingreso a la App encontrado', () => {
        expect(element(by.css('.page-selected ion-button')).getText()).toContain('INICIAR');
    });

    //el usuario navega a la page Login y comprueba que el botón INICIAR SESION existe
    it('Navegación y botón funcionando', () => {
        element(by.id('welcome')).click();
        browser.driver.sleep(500);
        expect(element(by.css('.page-selected ion-button')).getText()).toContain('INICIAR SESION');
    });
});