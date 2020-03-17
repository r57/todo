const validEmail = 'dude@gmail.com'
const invalidEmail = 'dude2@gmail.com'
const incorrectPassword = 'jirkakara'

const emailInputSelector = 'label:contains("Email")~div>input'
const passwordInputSelector = 'label:contains("Password")~div>input'
const submitButtonSelector = 'span:contains("Submit")'
const mainContentSelector = '[class*="content-container"]'


describe('User Login', function () {

    it(`User is logged in with an email ${validEmail} and on mainpage`, function () {
        cy.visit('')

        cy.get(emailInputSelector)
            .clear()
            .type(validEmail)
            .should('have.value',validEmail)

        cy.get(submitButtonSelector)
            .click()

        cy.get(mainContentSelector).should(($div) => {
            expect($div.get(0).innerText).to.eq('This is a home component')
        })
    })


    it(`Use non-whitelisted email ${invalidEmail} for login`, function () {
        cy.visit('')

        cy.get(emailInputSelector)
            .clear()
            .type(invalidEmail)
            .should('have.value',invalidEmail)

        const stub = cy.stub()

        cy.on ('window:alert', stub)
        cy.get(submitButtonSelector)
            .click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Wrong password dude/et')      
        })
    })


    it('Use invalid password', function () {
        cy.visit('')
        cy.url()

        cy.get(emailInputSelector)
            .clear()
            .type(validEmail)
            .should('have.value',validEmail)

        cy.get(passwordInputSelector)
            .clear()
            .type(incorrectPassword)

        const stub = cy.stub()

        cy.on ('window:alert', stub)
        cy.get(submitButtonSelector)
            .click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Wrong password dude/et')      
            })  
        })
})
