// http://example.cypress.io/todo
/// <reference types="Cypress" />


// first Q of assignment;;
describe("testing 1", () => {
    beforeEach(() => {
        cy.visit("http://example.cypress.io/todo");
    })

    it("focus on input form using class", () => {
        cy.get(".new-todo").focus();
    })

    it("type into input box", () => {
        cy.get(".new-todo").type("Buy laptop").should("have.value", "Buy laptop");
    })
})

//second Question of assignment;
describe("testing 2", () => {
    beforeEach(() => {
        cy.visit("http://example.cypress.io/todo");
    })
    it("should add a new element into the list", () => {
        cy.get(".todo-list").children().should("have.length", 2);
        cy.get(".new-todo").type("new todo adding{enter}");
        cy.get(".todo-list").children().should("have.length", 3);
    })
})


//third Question of assignment;
describe("testing 3", () => {
    beforeEach(() => {
        cy.visit("http://example.cypress.io/todo");
    })
    it("Todo item should have a checkbox", () => {
        cy.get(".toggle").first().click().get("li").should("have.class", "completed");
    })
})

//fourth Question assignment
describe("testing 4", () => {
    beforeEach(() => {
        cy.visit("http://example.cypress.io/todo");
    });

    it("check delete button exists", () => {
        cy.get(".destroy").should("exist");
    });

    it("check if user can delete an todo item", () => {
        cy.get(".todo-list").children().should("have.length", 2);
        cy.get(".toggle")
            .first()
            .click()
            .get("li")
            .should("have.class", "completed");
        // cy.get(".todo-list").first().get("li").get(".view").get(".destroy").click();
        // cy.get(".destroy").trigger("mouseover").children().first().click()
        cy.get(".todo-list").children().should("have.length", 2);
    });
});


