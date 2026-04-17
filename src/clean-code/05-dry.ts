type Size = '' | 'S' | 'M' | 'L';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ) {
    }

    productIsValid(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if (this[key].length === 0) throw new Error(`${key} is empty`);
                    break;
                case 'number':
                    if ((this[key]) <= 0) throw new Error(`${key} is zero or less than zero`);
                    break
                default:
                    throw new Error(`${key} is not valid`);
            }
        }
        return true;
    }

    toString() {

        if (!this.productIsValid()) return;

        return `${this.name} (${this.price}), ${this.size}`;
    }
}

(() => {
    const bluePants = new Product('Blue Large Pants', 10, 'M');
    console.log(bluePants.toString());
})();
