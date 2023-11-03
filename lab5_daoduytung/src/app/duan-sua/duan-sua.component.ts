import { Component, OnInit } from '@angular/core';
import { DuAn } from '../du-an';
import { NhanVien } from '../nhan-vien';
import { AsmService } from '../asm.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-duan-sua',
  templateUrl: './duan-sua.component.html',
  styleUrls: ['./duan-sua.component.css']
})
export class DuanSuaComponent implements OnInit {
  constructor(
    private asmService:AsmService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
  ){}
  id:number = Number(this.activatedRoute.snapshot.params['id']);
  da:DuAn = <DuAn>{}
  listNhanVien: NhanVien[] = [];
  submitted : boolean = false
  ngOnInit(): void {
    let kq = this.asmService.getMotDuAn(this.id);
    this.da = kq as DuAn;
    this.listNhanVien=this.asmService.getNhanVien();
  }
  capnhatDuAn(){
    this.submitted = true;
    if(!this.da.tenDuAn || !this.da.leader ||!this.da.ngayStart ||!this.da.thanhvien||!this.da.tien){
      return;
    }
    const isConfirmed = window.confirm('Bạn có muốn cập nhật dự án không?');
    if(isConfirmed){
    this.asmService.capnhatDuAn(this.da);
    this.router.navigate(['duan/']);
  }
}

}
