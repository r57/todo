const loginUrl = 'localhost:3000'
const listsUrl = 'localhost:3000/list'

const validEmail = 'dude@gmail.com'

const emailInputSelector = 'label:contains("Email")~div>input'

const mainContentSelector = '[class*="content-container"]'

const submitLoginButtonSelector = 'span:contains("Submit")'
const addListButtonSelector = 'span:contains("Add List")'

const addListModal = '[class="add-list-form"]'


describe('Create a new list', function () {

    it('Go to login page', function () {
        cy.visit(loginUrl)
        cy.url()
            .should('include',loginUrl)
    })

    it('Input a valid email: #validEmail', function () {
        cy.get(emailInputSelector)
            .clear()
            .type(validEmail)
            .should('have.value',validEmail)
    })

    it('Submit the login info', function () {
        cy.get(submitLoginButtonSelector)
            .click()
    })

    it('Go to Lists page', function () {
        cy.visit(listsUrl)
        cy.url()
            .should('include',listsUrl)
    })

    it('Start Add List modal', function () {
        cy.get(addListButtonSelector)
            .click()
    })

})