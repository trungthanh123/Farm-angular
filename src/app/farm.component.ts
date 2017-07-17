import { Component, OnInit, Input   } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';



@Component({
    selector: 'my-farm',
    templateUrl: './farm.component.html',
    styleUrls:['./app.component.css']
})
export class FarmComponent implements OnInit{
    public reward:number = 0;
    availableProducts: Array<Product> = [];
    shoppingBasket: Array<Product> = [];
    dem = 0;
    check:boolean = true;

    ngOnInit(){
      // xuất ra màn hình những cái đã lưu trữ stogate
      // if(localStorage.getItem("planted-storage") != null)
      //   {this.shoppingBasket = JSON.parse(localStorage.getItem("planted-storage"));}
      // if(localStorage.getItem("plants-storage") != null)
      //   this.availableProducts = JSON.parse(localStorage.getItem("plants-storage"));

      // this.dem = Number(localStorage.getItem('count-planted'));
      // if(this.dem > 14) { this.check =false}
      
    }
    constructor(private router: Router, private loginService: LoginService) {
        this.availableProducts.push(new Product('Apple', 15, '', 15, 20));
        this.availableProducts.push(new Product('Orange', 1, '', 20, 15));
        this.availableProducts.push(new Product('Lemon', 5, '', 30, 30));
        this.availableProducts.push(new Product('Dragon fruit', 4, '', 30, 5));
    }

    orderedProduct($event: any) {
        let orderedProduct: Product = $event.dragData;
        orderedProduct.quantity--;
        // localStorage.setItem("plants-storage", JSON.stringify(this.availableProducts));
    }

    addToBasket($event: any) {
        let newProduct: Product = $event.dragData;
        newProduct.date =  new Date();
        this.shoppingBasket.push(new Product(newProduct.name, 1, newProduct.date, newProduct.exp, newProduct.reward));
        //stogate cây đã trồng
        // localStorage.setItem("planted-storage", JSON.stringify(this.shoppingBasket));

        //nếu trồng được 15 cây thì sẽ disable 'drop'
        this.dem = this.dem + 1;        
        if(this.dem > 14) { this.check =false}
        // localStorage.setItem("count-planted", this.dem.toString());
    }

    total(): number {
        let count: number = 0;
        for (let indx in this.shoppingBasket) {
            count += 1;
        }
        return count;
    }

    exp:number = 0;
    destroyaPlant(index) {
      this.dem--;
      if(this.dem < 15) this.check =true;
      

      //this.exp = this.shoppingBasket[index].exp;
      //console.log(this.exp);
      this.shoppingBasket.splice(index,1);
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
  constructor(public name: string, public quantity: number, public date, public exp: number, public reward: number) {}
}
