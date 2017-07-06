import { Component } from '@angular/core';

@Component({
    selector: 'my-farm',
    templateUrl: './farm.component.html',
    styleUrls:['./app.component.css']
})
export class FarmComponent {
    availableProducts: Array<Product> = [];
    shoppingBasket: Array<Product> = [];
    listRecycled = [];

    constructor() {
        this.availableProducts.push(new Product('Apple', 3, ''));
        this.availableProducts.push(new Product('Orange', 1, ''));
        this.availableProducts.push(new Product('Lemon', 5, ''));
        this.availableProducts.push(new Product('Dragon fruit', 4, ''));
    }

    orderedProduct($event: any) {
        let orderedProduct: Product = $event.dragData;
        orderedProduct.quantity--;
    }

    addToBasket($event: any) {
        let newProduct: Product = $event.dragData;
        newProduct.date =  new Date();
        // console.log(date);
        // this.newProduct.date = date;
        this.shoppingBasket.push(new Product(newProduct.name, 1, newProduct.date));
        //console.log(this.shoppingBasket);
    }

    total(): number {
        let count: number = 0;
        for (let indx in this.shoppingBasket) {
            count += 1;
        }
        return count;
    }

    destroyaPlant(index) {
      this.shoppingBasket.splice(index,1);
    }
}

class Product {
  constructor(public name: string, public quantity: number, public date) {}
}
