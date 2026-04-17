(() => {

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {
        }
    }

    class InputAttributes {
        constructor(
            public placeholder: string,
            public value: string,
        ) {
        }
    }

    class InputEvents {
        constructor() {
        }

        setFocus() {
        };

        getValue() {
        };

        isActive() {
        };

        removeValue() {
        };
    }

    class InputElement {
        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes
        public events: InputEvents;

        constructor(value: string, placeholder: string, id: string) {
            this.htmlElement = new HtmlElement(id, 'input');
            this.inputAttributes = new InputAttributes(placeholder, value);
            this.events = new InputEvents();
        }
    }


    //? Idea para la nueva clase InputElement

    const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

    console.log({nameField});

})()
