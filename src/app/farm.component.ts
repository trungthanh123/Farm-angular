import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { AppService } from './services/app.service';
import { NgClass, NgStyle } from '@angular/common';
import { Http } from '@angular/http';
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
    ngOnInit() {
    }
    constructor(private router: Router, private loginService: LoginService, private _appservice: AppService, private _http: Http) {
        this.availableProducts.push(new Product(0, 'Apple', 15, '', 15, 20, ''));
        this.availableProducts.push(new Product(1, 'Orange', 1, '', 20, 15, ''));
        this.availableProducts.push(new Product(2, 'Lemon', 5, '', 30, 30, ''));
        this.availableProducts.push(new Product(3, 'Dragon fruit', 4, '', 30, 5, ''));
        //nhan data khi ng choi mua 1 square tu 'shop' component
        _appservice.quantitySquare_shop$.subscribe(data => {
            this.maxTreesAllowedToGrow += data; this.check = true;
        })
        //gọi api cây trong kho
        this._http.get('http://103.48.191.254/api/tree/detail')
            .map(data => data.json())
            .subscribe(res => {
                this.fruits = res.result;
            })
        //gọi api cây đã trồng
        this._http.post('http://103.48.191.254/api/tree/data', { "token": this.token })
            .map(data => data.json())
            .subscribe(res => {
            this.cayDaTrong = res.result
            })

    }

    orderedProduct($event: any) {
        let orderedProduct: Product = $event.dragData;
        orderedProduct.quantity--;
    }
    public token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNTk3NmRjNzE2MmIwM2MxYWEwZTg4MmE4Iiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiX192IjoiaW5pdCIsInVzZXJOYW1lIjoiaW5pdCIsInBhc3NXb3JkIjoiaW5pdCIsIkRpZW0iOiJpbml0IiwiS2luaE5naWVtIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwidXNlck5hbWUiOnRydWUsInBhc3NXb3JkIjp0cnVlLCJEaWVtIjp0cnVlLCJLaW5oTmdpZW0iOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sInBhdGhzVG9TY29wZXMiOnt9LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX192IjowLCJ1c2VyTmFtZSI6InRoYW5oQDEyMyIsInBhc3NXb3JkIjoidGhhbmgiLCJEaWVtIjowLCJLaW5oTmdpZW0iOjAsIl9pZCI6IjU5NzZkYzcxNjJiMDNjMWFhMGU4ODJhOCJ9LCIkaW5pdCI6dHJ1ZSwiaWF0IjoxNTAwOTcwODA0LCJleHAiOjE1MDA5NzE3MDR9._MzGU9RycN43XErYrmXKp5igdKYeTSCZsOW4qhId8To";
    addToBasket($event: any) {
        let newProduct = $event.dragData;
        //newProduct.date = new Date();
        this.cayDaTrong.push(newProduct);

        let data = { "TenCay": newProduct.TenCay, "status": "", "location": newProduct.id, "token": this.token };
        this._http.post('http://103.48.191.254/api/tree/plan', data)
            .map(data => data.json())
            .subscribe(res => console.log(res))
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
