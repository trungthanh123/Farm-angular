import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { AppService } from './services/app.service';
import { NgClass, NgStyle } from '@angular/common';
import { Http } from '@angular/http';
import { TreeService } from './services/tree.service';
@Component({
    selector: 'my-farm',
    templateUrl: './farm.component.html',
    styleUrls: ['./app.component.css']
})
export class FarmComponent implements OnInit {
    public reward: number = 0;
    availableProducts: Array<Product> = [];
    cayDaTrong = [];
    treePlanted = 0; maxTreesAllowedToGrow = 10;
    check: boolean = true;
    fruits = [];
    numberOfPlants: number = 1;
    token: string;
    ngOnInit() {
    }
    constructor(private router: Router, private loginService: LoginService, private _appservice: AppService, private _http: Http, private _treeService: TreeService) {
        this.availableProducts.push(new Product(0, 'Apple', 15, '', 15, 20, ''));
        this.availableProducts.push(new Product(1, 'Orange', 1, '', 20, 15, ''));
        this.availableProducts.push(new Product(2, 'Lemon', 5, '', 30, 30, ''));
        this.availableProducts.push(new Product(3, 'Dragon fruit', 4, '', 30, 5, ''));
        //nhan data khi ng choi mua 1 square tu 'shop' component
        _appservice.quantitySquare_shop$.subscribe(data => {
            this.maxTreesAllowedToGrow += data; this.check = true;
        })
        

        //gọi service api cây đã trồng
        this._treeService.API_CayDaTrong().subscribe(res => this.cayDaTrong = res.result);
        //gọi api cây trong kho
        this._treeService.API_LayCayTrong().subscribe(res => this.fruits = res.result);
    }
    orderedProduct($event: any) {
        let orderedProduct: Product = $event.dragData;
        orderedProduct.quantity--;
    }
    addToBasket($event: any) {
        let newProduct = $event.dragData;
        //newProduct.date = new Date();
        this.cayDaTrong.push(newProduct);

        let data = { "TenCay": newProduct.TenCay, "status": newProduct.status, "location": newProduct.id, "token": '' };
        this._treeService.API_TrongCay(data);
        //cập nhật số lượng mỗi cây trồng trong kho
        this._treeService.API_LayCayTrong().subscribe(res => this.fruits = res.result);
        
        //nếu trồng được 10 cây thì sẽ disable 'drop'
        this.treePlanted = this.treePlanted + 1;
        if (this.treePlanted >= this.maxTreesAllowedToGrow) { this.check = false }
    }

    total(): number {
        let count: number = 0;
        for (let indx in this.cayDaTrong) {
            count += 1;
        }
        return count;
    }

    exp: number = 0;
    destroyaPlant(index) {
        this.treePlanted--;
        if (this.treePlanted < this.maxTreesAllowedToGrow) this.check = true;
        this.cayDaTrong.splice(index, 1);
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

    getClassName(name) {
        if (name == 'apple')
            return 'apple';
        if (name == 'orange')
            return 'orange';
        if (name == 'lemon')
            return 'lemon';
        if (name == 'dragon-fruit')
            return 'dragon-fruit';
    }
}

class Product {
    constructor(public id: number, public name: string, public quantity: number, public date, public exp: number, public reward: number, public state: string) { }
}
