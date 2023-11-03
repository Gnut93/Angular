import { DuAn } from './../du-an';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsmService } from '../asm.service';
import { NhanVien } from '../nhan-vien';
import { Task } from '../task';

@Component({
  selector: 'app-duan-list',
  templateUrl: './duan-list.component.html',
  styleUrls: ['./duan-list.component.css']
})
export class DuanListComponent implements OnInit {
  constructor(
    private asmService:AsmService,
    private router:Router,
  ){ }
  tukhoa:string='';
  listDuAn:DuAn[]=[];
  thanhvien: number = 0;
  listThanhVien: [] = [];
  listNhanVien:NhanVien[] = [];
  listTask: Task [] = [];
  ngOnInit(): void {
    this.listDuAn=this.asmService.getDuAn();
    this.listDuAn = this.listDuAn;
    this.listNhanVien =this.asmService.getNhanVien()
  }
  xoaDuAn(id:number=0){
  const isConfirmed = window.confirm('Bạn có muốn xóa dự án không?');
  if (isConfirmed) {
    this.asmService.xoaDuAn(id);
    this.router.navigate(['duan/']);  
  }

  return false;
}
locDuAn() {
let keywordLower = this.tukhoa.toLowerCase();
this.listDuAn = this.listDuAn.filter(da => da.tenDuAn.toLowerCase().includes(keywordLower));
console.log(this.listDuAn)
}
getTenNhanVien(leader: number = 0) {
  let listNhanVien = this.listNhanVien.find(nv => nv.id === Number(leader));
  return listNhanVien?.hovaten;
}
getThanhVien(id:number[]): string{
  const matchingNVs = this.listNhanVien.filter(nv => id.includes(nv.id));
  const result = matchingNVs.map(nv => `${nv.hovaten}`).join(', ');
  return result;
}
}
