import { Component, OnInit } from '@angular/core';
import { DuAn } from '../du-an';
import { NhanVien } from '../nhan-vien';  
import { AsmService } from '../asm.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-duan-them',
  templateUrl: './duan-them.component.html',
  styleUrls: ['./duan-them.component.css']
})
export class DuanThemComponent implements OnInit {
  newData: string = '';
  constructor (
    private asmService:AsmService,
    private router: Router,
  ){}
  da:DuAn = <DuAn>{};
  submitted : boolean = false
    listNhanVien : NhanVien[] = [];
  themDuAn(){
    this.submitted = true;
    if(!this.da.tenDuAn || !this.da.leader ||!this.da.ngayStart ||!this.da.thanhvien||!this.da.tien){
      return;
    }
    
    this.asmService.themDuAn(this.da);
    this.router.navigate(['duan/']);
}
  ngOnInit(): void {
    this.listNhanVien=this.asmService.getNhanVien();
   }
}
