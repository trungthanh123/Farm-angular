import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { AppService } from './services/app.service';
import { NgClass, NgStyle } from '@angular/common';
import { Http } from '@angular/http';
import { TreeService } from './services/tree.service';
import * as _ from 'lodash';


@Component({
    selector: 'my-farm',
    templateUrl: './farm.component.html',
    styleUrls: ['./app.component.css']
})
export class FarmComponent implements OnInit {
    // public reward: number = 0;
    // availableProducts: Array<Product> = [];
    cayDaTrong = [];
    treesPlanted: number; maxTreesAllowedToGrow: number;
    check: boolean = true;
    fruits = [];
    my_money: number;
    my_exp: number = 0;
    Location: number = 0;
    ngOnInit() {
    }
    constructor(private _appService: AppService, private router: Router, private loginService: LoginService, private _treeService: TreeService) {
        // this.availableProducts.push(new Product(0, 'Apple', 15, '', 15, 20, ''));
        // this.availableProducts.push(new Product(1, 'Orange', 1, '', 20, 15, ''));
        // this.availableProducts.push(new Product(2, 'Lemon', 5, '', 30, 30, ''));
        // this.availableProducts.push(new Product(3, 'Dragon fruit', 4, '', 30, 5, ''));

        //nhan data khi ng choi mua 1 square tu 'shop' component
        // _appService.quantitySquare_shop$.subscribe(data => {
        //     this.maxTreesAllowedToGrow += data; this.check = true;
        // })

        this._treeService.API_MaxTree_TreesPlanted().subscribe(res => {
            this.treesPlanted = res.CayDaTrong;
            this.maxTreesAllowedToGrow = res.SoCayToiDa;
            if (res.CayDaTrong >= res.SoCayToiDa) this.check = false;
        });
        
        this._treeService.API_CayDaTrong().subscribe(res => {
            this.cayDaTrong = res.result;
            this.my_money = res.Diem;
            this.my_exp = res.KinhNgiem;
            this._appService.expFromFarmCom(this.my_exp);
            this._appService.moneyData(this.my_money);
            _.findLast(this.cayDaTrong, item => {
                return this.Location = item.Location;
            });
        });
        //gọi api cây trong kho
        this._treeService.API_LayCayTrong().subscribe(res => {
            this.fruits = res.result;
        });
        //sau khi thanh toán tiền bên shopComponent thì số tiền còn lại được gửi lại farmComponent để cập nhật
        this._appService.shop$.subscribe(res => this.my_money = res);
    }
    orderedProduct($event: any) {

    }
    addToBasket($event: any) {
        let newProduct = $event.dragData;
        this.Location++;
        //this.cayDaTrong.push(newProduct);
        let data = {
            "TenCay": newProduct.TenCay, "Location": this.Location, "DiemNhanDuoc": newProduct.DiemNhanDuoc,
            "KinhNgiemNhanDuoc": newProduct.KinhNgiemNhanDuoc, "ThoiGianTruongThanh": newProduct.ThoiGianTruongThanh, "token": ''
        };
        this._treeService.API_TrongCay(data).subscribe(res => {
            if (res.status === 200) {
                this._treeService.API_CayDaTrong().subscribe((res) => {
                    this.cayDaTrong = res.result;
                    this.treesPlanted = res.CayDaTrong;
                    //nếu CayDaTrong >= maxTreesAllowedToGrow thì sẽ disable 'drop'
                    if (this.treesPlanted >= this.maxTreesAllowedToGrow) {
                        this.check = false;
                    }
                    //cap nhat lai so luong cay trong KHO
                    this._treeService.API_LayCayTrong().subscribe((res) => {
                        this.fruits = res.result;
                    })
                })
            }
        });
        
    }

    total(): number {
        let count: number = 0;
        for (let indx in this.cayDaTrong) {
            count += 1;
        }
        return count;
    }

    exp: number = 0;
    //Thu hoach
    destroyaPlant(Location) {
        let data = { "Location": Location, "token": "" };
        this._treeService.API_HarvestTree(data).subscribe(res => {
            if (res.status === 200) {
                // this.my_money += res.Diem;
                // this.treesPlanted--;
                // this.check = true;
                // this.cayDaTrong.splice(index, 1);
                // this.my_exp = res.KinhNgiem;

                // nếu không gọi API thì sẽ đụng độ, view không có số tiền thật từ server => mua đồ trong shop k đồng bộ => gọi API chỗ này
                this._treeService.API_CayDaTrong().subscribe(res => {
                    this.cayDaTrong = res.result;
                    this.my_money = res.Diem;
                    this.my_exp = res.KinhNgiem;
                    //gủi my_money của user qua SHOP com
                    this._appService.moneyData(this.my_money);
                    this.treesPlanted = res.cayDaTrong;
                    this.check = true;
                })
            }
        })

        
    }

    logOut() {
        this.router.navigate(['/']);
        this.loginService.setLogin(false);
        localStorage.removeItem("username");
        localStorage.removeItem("token");
    }

    // public checkModalShop = true;
    getValueFromShop(dataFromShop) {
        // this.checkModalShop = false;

        // nhận mở khóa ô đất từ SHOP com     
        if (typeof dataFromShop === "number")
            this._treeService.API_MaxTree_TreesPlanted().subscribe(res => {
                this.maxTreesAllowedToGrow = res.SoCayToiDa;
                this.check = true;
            })
        else {
            // nhận số lượng tất cả cây trông đã mua từ SHOP com
            this._treeService.API_LayCayTrong().subscribe(res => {
                this.fruits = res.result; //console.log(res.result);
            })
        }
        this._treeService.API_CayDaTrong().subscribe(res => this.my_money = res.Diem);
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

// class Product {
//     constructor(public id: number, public name: string, public quantity: number, public date, public exp: number, public reward: number, public state: string) { }
// }
