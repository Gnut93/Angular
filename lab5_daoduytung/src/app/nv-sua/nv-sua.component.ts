import { Component, OnInit } from '@angular/core';
import { NhanVien } from '../nhan-vien';
import { AsmService } from '../asm.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nv-sua',
  templateUrl: './nv-sua.component.html',
  styleUrls: ['./nv-sua.component.css']
})
export class NvSuaComponent implements OnInit {
  constructor(
    private asmService:AsmService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
  ){}
  id:number = Number(this.activatedRoute.snapshot.params['id']);
  nv:NhanVien = <NhanVien>{}
  listNhanVien: [] = [];
  submitted : boolean = false
  ngOnInit(): void {
    let kq = this.asmService.getMotNhanVien(this.id);
    this.nv = kq as NhanVien;
  }
  capnhatNhanVien(){
    this.submitted = true;
    if(!this.nv.hovaten || !this.nv.ngaysinh ||!this.nv.phai ||!this.nv.khuvuc){
      return;
    }
    const isConfirmed = window.confirm("bạn có muốn cập nhật nhân viên  không");
    if(isConfirmed){
    this.asmService.capnhatNhanVien(this.nv);
    this.router.navigate(['nhanvien/']);
  }
}
}
