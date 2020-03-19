import { Component } from '../component';

export class InputField extends Component {
    constructor(selector) {
        super(selector);
    }

    getInputField() {
        return cy.get(this.selector)
    }

    clear() {
        cy.get(this.selector).clear()
    }

    type() {
        cy.get(this.selector).type()
    }

    getText() {
        cy.get(this.selector).invoke('text').then((text) => {
            // access the native DOM element
            return text
        })
    }
}
