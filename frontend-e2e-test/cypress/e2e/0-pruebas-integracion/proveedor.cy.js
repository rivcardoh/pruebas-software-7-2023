
describe("CRUD Proveedor", () => {//Titulo
    //Antes que nada, abrir el navegador en el proyecto Frontend que es el puerto 8100
    beforeEach(() => {
        cy.visit("http://localhost:8100"); //Frontend de Produccion
    });

    //Servicio API - GetCatProducto()
    it("GetProveedor()", () => {
        cy.wait(1000);//Esperar 1 seg.
        cy.get("ion-tab-button").eq(4).click(); // click en el TAB de catproducto
        cy.wait(1000);//Esperar 1 seg.

        cy.get("ion-item").should("be.visible")
        .should("not.have.length", "0"); //Verifica que exista al menos un (ion-item)
    });

    //Servicio API - GetCatProducto(entidad)
    it("AddProveedor(entidad)", () => {
        cy.get("ion-tab-button").eq(4).click(); // click en el TAB de catproducto
        cy.wait(1000);//Esperar 1 seg.

        cy.get("#nombreProveedor")
            .type("insertar nombre cypress", { delay: 100 })
            .should("have.value", "insertar nombre cypress");

        cy.wait(500);//Esperar medio seg.

        cy.get("#addProveedor").not("[disabled]").click();

        cy.wait(1000);//Esperar medio seg.

       
    });

it("DeleteProveedor()", () => {
    cy.wait(1000);//Esperar 1 seg.
    cy.get("ion-tab-button").eq(4).click(); // click en el TAB de catproducto
    cy.wait(1000);//Esperar 1 seg.

    cy.get("#deleteItem").not("[disabled]").click();
});
it("GetByIdProveedor()", () => {
    cy.wait(1000);//Esperar 1 seg.
    cy.get("ion-tab-button").eq(4).click(); // click en el TAB de catproducto
    cy.wait(1000);//Esperar 1 seg.

    cy.get("#getById").not("[disabled]").click();
});
});