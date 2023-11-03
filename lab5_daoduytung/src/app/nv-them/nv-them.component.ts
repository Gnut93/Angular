import { Component } from '@angular/core';
import { NhanVien } from '../nhan-vien';
import { AsmService } from '../asm.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nv-them',
  templateUrl: './nv-them.component.html',
  styleUrls: ['./nv-them.component.css']
})
export class NvThemComponent {
  newData : String = "";
  constructor (
    private asmService:AsmService,
    private router: Router,
  ){}
  nv:NhanVien = <NhanVien>{};
  listNhanVien:NhanVien [] = [];
  submitted : boolean = false
  themNhanVien(){
    this.submitted = true;
    console.log(this.nv)
    if(!this.nv.hovaten || !this.nv.ngaysinh ||!this.nv.phai ||!this.nv.khuvuc){
      return;
    }

    this.asmService.themNhanVien(this.nv);
    this.router.navigate(['nhanvien/']);
  }
  ngOnInit(): void { }

}
