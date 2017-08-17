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
    isPlanted:Array<boolean> = [true, true, true, true, true, true, true, true, true, true,];
    checkClassForWareHouse = [];
    checkClass: boolean = false;
    isMaxTree: boolean = false;
    cayDaTrong = [];
    treesPlanted: number; maxTreesAllowedToGrow: number;
    check: boolean = true;
    fruits = [];
    my_money: number;
    my_exp: number = 0;
    
    ngOnInit() {
        
    }
    constructor(private _appService: AppService, private router: Router, private loginService: LoginService, private _treeService: TreeService) {
        this._treeService.API_MaxTree_TreesPlanted().subscribe(res => {
            this.treesPlanted = res.CayDaTrong;
            this.maxTreesAllowedToGrow = res.SoCayToiDa;
            if (res.CayDaTrong >= res.SoCayToiDa) {
                this.check = false;
                // this.isMaxTree = true;
            };
        });

        this._treeService.API_CayDaTrong().subscribe(res => {
            this.cayDaTrong = res.result;
            this.my_money = res.Diem;
            this.my_exp = res.KinhNgiem;
            this._appService.expFromFarmCom(this.my_exp);
            this._appService.moneyData(this.my_money);
        });
        //gọi api cây trong kho
        this._treeService.API_LayCayTrong().subscribe(res => {
            this.fruits = res.result;
        });
        //sau khi thanh toán tiền bên shopComponent thì số tiền còn lại được gửi lại farmComponent để cập nhật
        this._appService.shop$.subscribe(res => {
            this.my_money = res;
            this.checkClass = true;
            setTimeout(() => {
                this.checkClass = false;
            }, 2000);
        });
    }
    orderedProduct($event: any) {

    }
    addToBasket($event: any, location) {
        let newProduct = $event.dragData;
        
        localStorage.setItem("isPlanted", this.isPlanted.toString());
       
        //this.cayDaTrong.push(newProduct);
        let data = {
            "TenCay": newProduct.TenCay, "Location": location, "DiemNhanDuoc": newProduct.DiemNhanDuoc,
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
                //setTimeOut de lam animation
                setTimeout(() => {
                    // nếu không gọi API thì sẽ đụng độ, view không có số tiền thật từ server => mua đồ trong shop k đồng bộ => gọi API chỗ này
                    this._treeService.API_CayDaTrong().subscribe(res => {
                        this.cayDaTrong = res.result;
                        this.my_money = res.Diem;
                        this.my_exp = res.KinhNgiem;
                        //gủi my_money của user qua SHOP com
                        this._appService.moneyData(this.my_money);
                        this.treesPlanted = res.cayDaTrong;
                        this.check = true;
                        this.isPlanted[Location] = true;
                        localStorage.setItem("isPlanted", this.isPlanted.toString());
                    })
                }, 500)
            }
        })
    }

    logOut() {
        this.router.navigate(['/']);
        this.loginService.setLogin(false);
        localStorage.removeItem("username");
        localStorage.removeItem("token");
    }

    getValueFromShop(dataFromShop) {
        // nhận mở khóa ô đất từ SHOP com     
        if (typeof dataFromShop === "number")
            this._treeService.API_MaxTree_TreesPlanted().subscribe(res => {
                this.maxTreesAllowedToGrow = res.SoCayToiDa;
                this.check = true;
                this.checkClass = true;
                setTimeout(() => {
                    this.checkClass = false;
                }, 2000);
            })
        else if (typeof dataFromShop.form === "object") {
            this.checkClassForWareHouse = dataFromShop.n
            // nhận số lượng tất cả cây trông đã mua từ SHOP com
            this._treeService.API_LayCayTrong().subscribe(res => {
                this.fruits = res.result;
                this.checkClass = true;
                setTimeout(() => {
                    this.checkClass = false;
                }, 2000);
            })
        }
        //cập nhật tiền rồi gửi lại cho SHOP com
        this._treeService.API_CayDaTrong().subscribe(res => {
            this.my_money = res.Diem;
            this._appService.moneyData(this.my_money);
        });

    }
    waterTree(location) {
        //api tuoi nuoc
        //api /data cap nhat vuon
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