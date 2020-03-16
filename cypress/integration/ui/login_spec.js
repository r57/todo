const loginUrl = 'localhost:3000'
const validEmail = 'dude@gmail.com'
const invalidEmail = 'dude2@gmail.com'
const incorrectPassword = 'jirkakara'

const emailInputSelector = 'label:contains("Email")~div>input'
const passwordInputSelector = 'label:contains("Password")~div>input'
const submitButtonSelector = 'span:contains("Submit")'
const mainContentSelector = '[class*="content-container"]'


describe('Log-in to the app', function () {

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
        cy.get(submitButtonSelector)
            .click()
    })

    it('User is successfully logged in and is redirected to the mainpage', function () {
        cy.get(mainContentSelector).should(($div) => {
            expect($div.get(0).innerText).to.eq('This is a home component')
        })
    })
})


describe('Use non-whitelisted email for login', function () {

    it('Go to login page', function () {
        cy.visit(loginUrl)
        cy.url()
            .should('include',loginUrl)
    })

    it('Input an invalid email: #invalidEmail', function () {
        cy.get(emailInputSelector)
            .clear()
            .type(invalidEmail)
            .should('have.value',invalidEmail)
    })

    it('Submit the login info and get rekt with an alert window', function () {
        const stub = cy.stub()

        cy.on ('window:alert', stub)
        cy.get(submitButtonSelector)
            .click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Wrong password dude/et')      
            })  
    })
})


describe('Use invalid password', function () {

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

    it('Input an incorrect password', function () {
        cy.get(passwordInputSelector)
            .clear()
            .type(incorrectPassword)
    })

    it('Submit the login info and get rekt with an alert window', function () {
        const stub = cy.stub()

        cy.on ('window:alert', stub)
        cy.get(submitButtonSelector)
            .click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Wrong password dude/et')      
            })  
    })
})
