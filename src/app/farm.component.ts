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
    //10 ô đất đầu tiên sẽ được phép trồng, 5 ô đất sau sẽ phụ thuộc vào người chơi có mở khóa hay không.
    isPlanted: Array<boolean> = [true, true, true, true, true, true, true, true, true, true, false, false, false, false, false];
    buyingEffect = [];
    checkClass: boolean = false;
    isMaxTree: boolean = false;
    cayDaTrong = [];
    treesPlanted: number; maxTreesAllowedToGrow: number;
    fruits = [];
    my_money: number;
    my_exp: number = 0;
    priceSquare = 500;
    isUnlock = true;
    isBuying = false;
    ngOnInit() {

    }
    constructor(private _appService: AppService, private router: Router, private loginService: LoginService, private _treeService: TreeService) {
        this._treeService.API_MaxTree_TreesPlanted().subscribe(res => {
            this.treesPlanted = res.CayDaTrong;
            this.maxTreesAllowedToGrow = res.SoCayToiDa;
            if (this.maxTreesAllowedToGrow >= 11) this.isPlanted[10] = true;
            if (this.maxTreesAllowedToGrow >= 12) this.isPlanted[11] = true;
            if (this.maxTreesAllowedToGrow >= 13) this.isPlanted[12] = true;
            if (this.maxTreesAllowedToGrow >= 14) this.isPlanted[13] = true;
            if (this.maxTreesAllowedToGrow >= 15) this.isPlanted[14] = true;
        });

        this._treeService.API_CayDaTrong().subscribe(res => {
            this.cayDaTrong = res.result;
            this.my_money = res.Diem;
            this.my_exp = res.KinhNgiem;
            this._appService.expFromFarmCom(this.my_exp);
            this._appService.moneyData(this.my_money);
            //check 1 ô đất không được trồng 2 cây
            this.cayDaTrong.map((res) => {
                if (res.Location != null)
                    this.isPlanted[res.Location] = false;
            })
        });
        //gọi api cây trong kho
        this._treeService.API_LayCayTrong().subscribe(res => {
            this.fruits = res.result;
        });
        //sau khi thanh toán tiền bên shopComponent thì số tiền còn lại được gửi lại farmComponent để cập nhật
        this._appService.shop$.subscribe(res => {
            this.my_money = res;
            this.isBuying = true;
            setTimeout(() => {
                this.isBuying = false;
            }, 2000);
        });
    }
    orderedProduct($event: any) {

    }
    plantedClass = false;
    addToBasket($event: any, location) {
        let newProduct = $event.dragData;
        //this.cayDaTrong.push(newProduct);
        let data = {
            "TenCay": newProduct.TenCay, "Location": location, "DiemNhanDuoc": newProduct.DiemNhanDuoc,
            "KinhNgiemNhanDuoc": newProduct.KinhNgiemNhanDuoc, "ThoiGianTruongThanh": newProduct.ThoiGianTruongThanh, "token": ''
        };
        this._treeService.API_TrongCay(data).subscribe(res => {
            if (res.status === 200) {
                this.plantedClass = true;
                this._treeService.API_CayDaTrong().subscribe((res) => {
                    this.cayDaTrong = res.result;
                    this.treesPlanted = res.CayDaTrong;
                    setTimeout(() => {
                        this.plantedClass = false;
                    }, 1000)
                    //check 1 ô đất không được trồng 2 cây
                    this.cayDaTrong.map((res) => {
                        if (res.Location != null)
                            this.isPlanted[res.Location] = false;
                    })
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
                this.checkClass = true;
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
                        this.isPlanted[Location] = true;
                        this.checkClass = false;
                    })
                }, 700)
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
        this.buyingEffect = dataFromShop.n;

        // nhận số lượng tất cả cây trông đã mua từ SHOP com
        this._treeService.API_LayCayTrong().subscribe(res => {
            this.fruits = res.result;
            this.isBuying = true;
            setTimeout(() => {
                this.isBuying = false;
            }, 2000);
        })
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
    unlockSquare() {
        if (this.my_money >= this.priceSquare) {
            this._treeService.API_buySquare().subscribe(res => {
                if (res.status === 200) {
                    this.isPlanted.push(true);
                    //cập nhật tiền rồi gửi lại cho SHOP com
                    this._treeService.API_CayDaTrong().subscribe(res => {
                        this.my_money = res.Diem;
                        this._appService.moneyData(this.my_money);
                    });
                    this._treeService.API_MaxTree_TreesPlanted().subscribe(res => {
                        this.treesPlanted = res.CayDaTrong;
                        this.maxTreesAllowedToGrow = res.SoCayToiDa;
                        if (this.maxTreesAllowedToGrow >= 11) this.isPlanted[10] = true;
                        if (this.maxTreesAllowedToGrow >= 12) this.isPlanted[11] = true;
                        if (this.maxTreesAllowedToGrow >= 13) this.isPlanted[12] = true;
                        if (this.maxTreesAllowedToGrow >= 14) this.isPlanted[13] = true;
                        if (this.maxTreesAllowedToGrow >= 15) this.isPlanted[14] = true;
                    });
                    this.isUnlock = false;
                }
            })
        }
        else {
            alert("You don't have enough money");
        }
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