import { expect, fixture } from "@open-wc/testing";
import { MyElement } from "./my-element";
import { html } from "lit";
import { fetchPackageInfo } from "./impl-fetch";
import Sinon from "sinon";

const msgError:string = "[001]- parametros incorrectos"



describe("my-element", () => {

    it("should be true",() => {
        expect(true).eqls(true); //verificar ejecucion correcta del entorno
    });

    it("should add two number", async () => {
        //let result = sum(10,5);
        //expect(result).eqls(15);
        let element: MyElement;
        element = await fixture(html`<my-element></my-element>`)
        expect(element.sum(10,5)).eqls(15);
    });

    it("should return 0",async() => {//no se esparaba una cadena
         let num2: any = "cinco"
        // let result = sum(10,num2);
        // expect(result).eqls(0);
        let element: MyElement;
        element = await fixture(html`<my-element></my-element>`)
        expect(element.sum(10,num2)).eqls(15);

    });

    it("should throw an error",() => {//prueba de validacion de exepcion
        // let num2: any = "cinco"
        // expect(() => sum(10,num2)).to.throw(msgError);

    });

    it("should be instance", async () => {//verificar que nuestro compunente se instancie
        let element: MyElement;
        element = await fixture(html`<my-element></my-element>`)
        expect(element).to.be.instanceOf(MyElement);
    });

    it("should contain html", async () => {
        let element: MyElement;
        element = await fixture(html`<my-element></my-melement>`)
        expect(element).shadowDom.equal("<p>Hola, Mundo!</p>");
    });

    // it("should contain padding of 16px", async () => {
    //     let element: MyElement;
    //     element = await fixture(html`<app-element></app-element>`)
    //     await element.updateComplete;
    //     expect(getComputedStyle(element).padding).equal("16px");
    // });

    it("should call fetch", async () => {
        let fetchStub = Sinon.stub(globalThis, "fetch");
        let abortController = new AbortController();
        const mockResponse = {name:"mock-package", version: "1.0.1"};

        fetchStub.resolves(new Response(JSON.stringify(mockResponse), {status:200}));

        const result = fetchPackageInfo("mock-package", abortController.signal);

        expect(result).to.deep.equal(mockResponse);
        fetchStub.restore();
    });




    

});
