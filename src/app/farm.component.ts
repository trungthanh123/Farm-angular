import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { AppService } from './services/app.service';
import * as _ from 'underscore';
import { NgStyle, NgClass } from '@angular/common';
import { PagerService } from './services/pagination.service'

@Component({
    selector: 'my-farm',
    templateUrl: './farm.component.html',
    styleUrls: ['./app.component.css']
})
export class FarmComponent implements OnInit {
    public reward: number = 0;
    money: number;
    priceALand = 500;
    availableProducts: Array<Product> = [];
    shoppingBasket: Array<Product> = [];
    maxTreesAllowedToGrow = 5;
    
    pager: any = {};
    pageFruits: any[];
    filterValue: string;
    locked: boolean = true;
    check1 = true;
    isPlanted = [true, true, true, true, true, false, false, false, false, false,];
    
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
        this.availableProducts.push(new Product(0, 'apple', 15, '', 15, 20, '', 0, 'assets/fruits/apple.png'));
        this.availableProducts.push(new Product(1, 'orange', 1, '', 20, 15, '', 0, 'assets/fruits/orange.png'));
        this.availableProducts.push(new Product(2, 'banana', 5, '', 30, 30, '', 0, 'assets/fruits/banana.png'));
        this.availableProducts.push(new Product(3, 'grapes', 4, '', 30, 5, '', 0, 'assets/fruits/grapes.png'));
        this.availableProducts.push(new Product(3, 'cherry', 4, '', 30, 5, '', 0, 'assets/fruits/cherry.png'));
        this.availableProducts.push(new Product(3, 'eggplant', 4, '', 30, 5, '', 0, 'assets/fruits/eggplant.png'));
        this.availableProducts.push(new Product(3, 'pear', 4, '', 30, 5, '', 0, 'assets/fruits/pear.png'));
        this.availableProducts.push(new Product(3, 'strawberry', 4, '', 30, 5, '', 0, 'assets/fruits/strawberry.png'));
        this.availableProducts.push(new Product(3, 'tomato', 4, '', 30, 5, '', 0, 'assets/fruits/tomato.png'));
        // this.availableProducts.push(new Product(3, 'CHERRY', 4, '', 30, 100, ''));
        //nhan data khi ng choi mua 1 square tu 'shop' component
        
        _appservice.money$.subscribe(data => {
            this.money = data;
        });
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

    addToBasket($event: any, location) {
        let newProduct: Product = $event.dragData;
        newProduct.date = new Date();
        newProduct.location = location;
        this.shoppingBasket.push(new Product(newProduct.id, newProduct.name, 1, newProduct.date, newProduct.exp, newProduct.reward, newProduct.state, newProduct.location, newProduct.img));
        //stogate cây đã trồng
        // localStorage.setItem("planted-storage", JSON.stringify(this.shoppingBasket));                
        //nếu trồng được 10 cây thì sẽ disable 'drop'
        this.shoppingBasket.map( (tree) => {
            if(tree.location) 
             this.isPlanted[tree.location]=false;
        })
        // this.treePlanted = this.treePlanted + 1;
        // if (this.treePlanted >= this.maxTreesAllowedToGrow) { this.check = false }

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
    destroyaPlant(index, location) {
        // this.treePlanted--;
        // if (this.treePlanted < this.maxTreesAllowedToGrow) this.check = true;
        //this.exp = this.shoppingBasket[index].exp;
        //console.log(this.exp);
        this.isPlanted[location] = true;
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

    unlockTheLand() {
        if (this.money >= this.priceALand) {
            this.money -= this.priceALand;
            this.maxTreesAllowedToGrow++;
            if(this.maxTreesAllowedToGrow >= 6) this.isPlanted[5] = true;
            if(this.maxTreesAllowedToGrow >= 7) this.isPlanted[6] = true;
            if(this.maxTreesAllowedToGrow >= 8) this.isPlanted[7] = true;
            if(this.maxTreesAllowedToGrow >= 9) this.isPlanted[8] = true;
            if(this.maxTreesAllowedToGrow >= 10) this.isPlanted[9] = true;
            this._appservice.shopData(this.money);
        }
        else {
            alert("k du tien");
        }
    }
}

export class Product {
    constructor(public id: number, public name: string, public quantity: number, public date, public exp: number, public reward: number, public state: string, public location,
        public img: string
    ) { }
}
