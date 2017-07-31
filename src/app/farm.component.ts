import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { AppService } from './services/app.service';
import * as _ from 'underscore';
 
import { PagerService } from './services/pagination.service'

@Component({
    selector: 'my-farm',
    templateUrl: './farm.component.html',
    styleUrls: ['./app.component.css']
})
export class FarmComponent implements OnInit {
    public reward: number = 0;
    availableProducts: Array<Product> = [];
    shoppingBasket: Array<Product> = [];
    treePlanted = 0; maxTreesAllowedToGrow = 10;
    check: boolean = true;
    pager:any = {};
    pageFruits: any[];

    ngOnInit() {
        // xuất ra màn hình những cái đã lưu trữ stogate
        // if(localStorage.getItem("planted-storage") != null)
        //   {this.shoppingBasket = JSON.parse(localStorage.getItem("planted-storage"));}
        // if(localStorage.getItem("plants-storage") != null)
        //   this.availableProducts = JSON.parse(localStorage.getItem("plants-storage"));
        // this.dem = Number(localStorage.getItem('count-planted'));
        // if(this.dem > 14) { this.check =false}
        this.setPage(1);
    }
    constructor(private router: Router, private loginService: LoginService, private _appservice: AppService, private pagerService: PagerService) {
        this.availableProducts.push(new Product(0, 'Apple', 15, '', 15, 20, ''));
        this.availableProducts.push(new Product(1, 'Orange', 1, '', 20, 15, ''));
        this.availableProducts.push(new Product(2, 'Lemon', 5, '', 30, 30, ''));
        this.availableProducts.push(new Product(3, 'Dragon fruit', 4, '', 30, 5, ''));
        this.availableProducts.push(new Product(3, 'Kiwi', 4, '', 30, 5, ''));
        this.availableProducts.push(new Product(3, 'Coconut', 4, '', 30, 5, ''));
        this.availableProducts.push(new Product(3, 'Mango', 4, '', 30, 5, ''));
        this.availableProducts.push(new Product(3, 'Longan', 4, '', 30, 5, ''));
        this.availableProducts.push(new Product(3, 'Strawberry', 4, '', 30, 5, ''));
        //nhan data khi ng choi mua 1 square tu 'shop' component
        _appservice.quantitySquare_shop$.subscribe(data => {
            this.maxTreesAllowedToGrow += data; this.check = true;
        })
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.availableProducts.length, page);
        // get current page of items
        this.pageFruits = this.availableProducts.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    orderedProduct($event: any) {
        let orderedProduct: Product = $event.dragData;
        orderedProduct.quantity--;
        // localStorage.setItem("plants-storage", JSON.stringify(this.availableProducts));
    }

    addToBasket($event: any) {
        let newProduct: Product = $event.dragData;
        newProduct.date = new Date();
        this.shoppingBasket.push(new Product(newProduct.id, newProduct.name, 1, newProduct.date, newProduct.exp, newProduct.reward, newProduct.state));
        //stogate cây đã trồng
        // localStorage.setItem("planted-storage", JSON.stringify(this.shoppingBasket));                
        //nếu trồng được 10 cây thì sẽ disable 'drop'
        this.treePlanted = this.treePlanted + 1;
        if (this.treePlanted >= this.maxTreesAllowedToGrow) { this.check = false }
        // localStorage.setItem("count-planted", this.dem.toString());
    }

    total(): number {
        let count: number = 0;
        for (let indx in this.shoppingBasket) {
            count += 1;
        }
        return count;
    }

    exp: number = 0;
    destroyaPlant(index) {
        this.treePlanted--;
        if (this.treePlanted < this.maxTreesAllowedToGrow) this.check = true;
        //this.exp = this.shoppingBasket[index].exp;
        //console.log(this.exp);
        this.shoppingBasket.splice(index, 1);
    }

    logOut() {
        this.router.navigate(['/']);
        this.loginService.setLogin(false);
        localStorage.removeItem("username");
    }

    public checkModalShop = true;
    getValueFromShop(event) {
        this.checkModalShop = false;
        this.availableProducts[0].quantity += Number(event.numberOfApples);
        this.availableProducts[1].quantity += Number(event.numberOfOranges);
        this.availableProducts[2].quantity += Number(event.numberOfLemons);
        this.availableProducts[3].quantity += Number(event.numberOfDragons);
    }

}

class Product {
    constructor(public id: number, public name: string, public quantity: number, public date, public exp: number, public reward: number, public state: string) { }
}
