import {expect, fixture } from "@open-wc/testing";
import { Ejercicio1 } from "./ejercicio01-element";
import { LoginForm } from "./ejercicio02-element";
import { CardList } from "./ejercicio03-element";
import { html} from "lit";
//import { MyElement } from "./my-element";

describe("ejercicio01", () => {

    it('debería renderizar el componente con el valor inicial del contador', async () => {
        let element: Ejercicio1;
        element = await fixture(html`<app-ejercicio01></app-ejercicio01>`);

        const input = element.shadowRoot?.querySelector('#count') as HTMLInputElement;
        
        await (element as Ejercicio1).updateComplete;
        //Comprobamos que el valor inicial es 0
        expect(input?.value).to.equal(1);
      });
    
      it('debería incrementar el contador cuando se haga clic en el botón +', async () => {
        let element: Ejercicio1;
        element = await fixture(html`<app-ejercicio01></app-ejercicio01>`);

        const incrementButton = element.shadowRoot?.querySelector('button:nth-of-type(1)') as HTMLButtonElement;
        const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
    
        incrementButton?.click();
        
        // Esperamos a que Lit complete la actualización
        await (element as Ejercicio1).updateComplete;
    
        // Comprobamos que el valor se ha incrementado a 1
        expect(input?.value).to.equal('1');
      });
    
      it('debería decrementar el contador cuando se haga clic en el botón -', async () => {
        let element: Ejercicio1;
        element = await fixture(html`<app-ejercicio01></app-ejercicio01>`);

        const decrementButton = element.shadowRoot?.querySelector('button:nth-of-type(2)') as HTMLButtonElement;
        const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
    
        // Inicializamos el contador a 1 para la prueba
        (element as Ejercicio1).counter = 1;
        await (element as Ejercicio1).updateComplete; // Esperamos la actualización del DOM
    
        decrementButton?.click();
        
        // Esperamos a que Lit complete la actualización
        await (element as Ejercicio1).updateComplete;
    
        // Comprobamos que el valor se ha decrementado a 0
        expect(input?.value).to.equal('0');
      });

});


describe('LoginForm ejercicio02', () => {
  
    it('debería renderizar el formulario con los campos de correo electrónico y contraseña', async () => {
      let element: LoginForm;
      element = await fixture(html`<my-form></my-form>`);
      
      // Verifica que los campos de email y password estén
      const emailInput = element.shadowRoot?.querySelector('input[type="email"]') as HTMLInputElement;
      const passwordInput = element.shadowRoot?.querySelector('input[type="password"]') as HTMLInputElement;

      console.log(emailInput +" "+passwordInput)
      
      expect(emailInput).to.not.be.null;
      expect(passwordInput).to.not.be.null;
    });
  
    it('debería mostrar un mensaje de error si el correo electrónico es inválido', async () => {
        let element: LoginForm;
        element = await fixture(html`<my-form></my-form>`);

      const emailInput = element.shadowRoot?.querySelector('input[type="email"]') as HTMLInputElement;
  
      // Ingresamos un correo inválido
      emailInput.value = 'invalid-email';
      emailInput.dispatchEvent(new Event('input'));  // Simulamos el cambio de valor
      
      await (element as LoginForm).updateComplete;  // Esperamos a que Lit complete la actualización
  
      const errorMessage = element.shadowRoot?.querySelector('.error');
      expect(errorMessage).to.not.be.null;
      expect(errorMessage?.textContent).to.include('ingrese un correo válido.');
    });
  
    it('debería habilitar el botón "Iniciar sesión" cuando el correo y la contraseña sean válidos', async () => {
        let element: LoginForm;
        element = await fixture(html`<my-form></my-form>`);

      const emailInput = element.shadowRoot?.querySelector('input[type="email"]') as HTMLInputElement;
      const passwordInput = element.shadowRoot?.querySelector('input[type="password"]') as HTMLInputElement;
      const loginButton = element.shadowRoot?.querySelector('button') as HTMLButtonElement;
      
      // Ingresamos un correo válido y una contraseña
      emailInput.value = 'test@example.com';
      passwordInput.value = 'password123';
      
      emailInput.dispatchEvent(new Event('input'));
      passwordInput.dispatchEvent(new Event('input'));
  
      await (element as LoginForm).updateComplete;
  
      // El botón debe estar habilitado
      expect(loginButton.disabled).to.be.false;
    });
  
    it('debería deshabilitar el botón "Iniciar sesión" si el correo o la contraseña son inválidos', async () => {
        let element: LoginForm;
        element = await fixture(html`<my-form></my-form>`);

      const emailInput = element.shadowRoot?.querySelector('input[type="email"]') as HTMLInputElement;
      const passwordInput = element.shadowRoot?.querySelector('input[type="password"]') as HTMLInputElement;
      const loginButton = element.shadowRoot?.querySelector('button') as HTMLButtonElement;
      
      // Ingresamos un correo inválido y una contraseña
      emailInput.value = 'invalid-email';
      passwordInput.value = 'password123';
      
      emailInput.dispatchEvent(new Event('input'));
      passwordInput.dispatchEvent(new Event('input'));
  
      await (element as LoginForm).updateComplete;
  
      // El botón debe estar deshabilitado
      expect(loginButton.disabled).to.be.true;
    });
  
    it('debería actualizar las propiedades de correo electrónico y contraseña cuando el usuario escribe en los campos de entrada', async () => {
       let element: LoginForm;
       element = await fixture(html`<my-form></my-form>`);

      const emailInput = element.shadowRoot?.querySelector('input[type="email"]') as HTMLInputElement;
      const passwordInput = element.shadowRoot?.querySelector('input[type="password"]') as HTMLInputElement;
  
      // Simulamos la escritura en los campos
      emailInput.value = 'test@example.com';
      passwordInput.value = 'password123';
      
      emailInput.dispatchEvent(new Event('input'));
      passwordInput.dispatchEvent(new Event('input'));
  
      await (element as LoginForm).updateComplete;
  
      // Verifica que las propiedades se han actualizado
      expect(element.email).to.equal('test@example.com');
      expect(element.password).to.equal('password123');
    });
  });



  describe('CardList ejercicio03', () => {
    it('debería renderizar el componente sin errores', async () => {
      const element = await fixture(html`<card-list></card-list>`);
      
      // Verificaque el componente haya sido renderizado correctamente
      expect(element).to.be.instanceOf(CardList);
    });
  
    it('debería renderizar las tarjetas correctamente si hay datos', async () => {
      const element = await fixture(html`<card-list .cards=${[
        { title: 'Card 1', imageUrl: 'image1.jpg', description: 'Description 1' },
        { title: 'Card 2', imageUrl: 'image2.jpg', description: 'Description 2' },
      ]}></card-list>`);
  
      // Verifica que haya dos tarjetas renderizadas
      const cards = element.shadowRoot?.querySelectorAll('.card');
      expect(cards?.length).to.equal(2);
  
      // Verifica que las tarjetas tengan el contenido esperado
      expect(cards?.[0].querySelector('h2')?.textContent).to.equal('Card 1');
      expect(cards?.[1].querySelector('h2')?.textContent).to.equal('Card 2');
    });
  
    it('debería mostrar el contenedor de tarjetas correctamente', async () => {
      const element = await fixture(html`<card-list></card-list>`);
      
      // Verifica que el contenedor de tarjetas exista
      const container = element.shadowRoot?.querySelector('.card-container');
      expect(container).to.not.be.null;
    });
  
    it('debería actualizar las tarjetas cuando se reciba la respuesta de fetch', async () => {
  
      const mockCards = [
        { title: 'Card 1', imageUrl: 'image1.jpg', description: 'Description 1' },
        { title: 'Card 2', imageUrl: 'image2.jpg', description: 'Description 2' }
      ];
      global.fetch = () => Promise.resolve({
        json: () => Promise.resolve(mockCards)
      }) as any;
  
      const element = await fixture(html`<card-list></card-list>`);
      await (element as LoginForm).updateComplete; 

      // Verifica que las tarjetas hayan sido actualizadas correctamente
      const cards = element.shadowRoot?.querySelectorAll('.card');
      expect(cards?.length).to.equal(mockCards.length);
      expect(cards?.[0].querySelector('h2')?.textContent).to.equal('Card 1');
      expect(cards?.[1].querySelector('h2')?.textContent).to.equal('Card 2');
    });
  
    
  });