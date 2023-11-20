describe("CRUD Pedido", () => {//Titulo
    //Antes que nada, abrir el navegador en el proyecto Frontend que es el puerto 8100
    beforeEach(() => {
        cy.visit("http://localhost:8100"); //Frontend de Produccion
    });

    //Servicio API - GetCatProducto()
    it("GetPedido()", () => {
        cy.wait(1000);//Esperar 1 seg.
        cy.get("ion-tab-button").eq(5).click(); // click en el TAB de catproducto
        cy.wait(1000);//Esperar 1 seg.

        cy.get("ion-item").should("be.visible")
            .should("not.have.length", "0"); //Verifica que exista al menos un (ion-item)
    });

    //Servicio API - GetCatProducto(entidad)
    it("AddPedido(entidad)", () => {
        cy.get("ion-tab-button").eq(5).click(); // click en el TAB de catproducto
        cy.wait(1000);//Esperar 1 seg.

        cy.get("#idProveedor")
            .type("2", { delay: 100 })
            .should("have.value", "2");

        cy.wait(500);//Esperar medio seg.
        cy.get("#idProducto")
            .type("1", { delay: 100 })
            .should("have.value", "1");

        cy.wait(500);//Esperar medio seg.

        cy.get("#idUsuario")
            .type("1", { delay: 100 })
            .should("have.value", "1");

        cy.wait(500);//Esperar medio seg.

        cy.get("#cantidad")
            .type("10", { delay: 100 })
            .should("have.value", "10");

        cy.wait(500);//Esperar medio seg.



        cy.get("#addPedido").not("[disabled]").click();
    });
    it("DeletePedido()", () => {
        cy.wait(1000);//Esperar 1 seg.
        cy.get("ion-tab-button").eq(5).click(); // click en el TAB de catproducto
        cy.wait(1000);//Esperar 1 seg.

        cy.get("#deleteItem").not("[disabled]").click();
    });
    it("GetByIdPedido()", () => {
        cy.wait(1000);//Esperar 1 seg.
        cy.get("ion-tab-button").eq(5).click(); // click en el TAB de catproducto
        cy.wait(1000);//Esperar 1 seg.

        cy.get("#getById").not("[disabled]").click();
    });

});