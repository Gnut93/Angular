import { Component, OnInit } from '@angular/core';
import { AsmService } from '../asm.service';
import { Router } from '@angular/router';
import { NhanVien } from '../nhan-vien';
@Component({
  selector: 'app-nv-list',
  templateUrl: './nv-list.component.html',
  styleUrls: ['./nv-list.component.css']
})
export class NvListComponent implements OnInit{
  constructor(
    private asmService:AsmService,
    private router:Router,
  ){ }
  selectedRegion: string = '';
  listNhanVien:NhanVien[]=[];
khuVucDuocChon: string = '';
khuVucOptions: string[] = ['Bắc', 'Nam', 'Trung'];
ketQuaTimKiem: NhanVien[] = [];
coKetQuaTimKiem: boolean = false;
  ngOnInit(): void {
    this.listNhanVien=this.asmService.getNhanVien();
  }
  xoaNhanVien(id:number=0){
    const isConfirmed = window.confirm('Bạn có muốn xóa Nhân Viên không?');
    if(isConfirmed){
    this.asmService.xoaNhanVien(id);
    this.router.navigate(['nhanvien/']);
    }
    return false;
  }
  timKiemTheoKhuVuc() {
    if (this.khuVucDuocChon !== '') {
      this.ketQuaTimKiem = this.listNhanVien.filter((nhanVien) => {
        return (
          nhanVien.khuvuc.toLowerCase() === this.khuVucDuocChon.toLowerCase()
        );
      });
      this.coKetQuaTimKiem = true;
    } else {
      this.ketQuaTimKiem = [];
      this.coKetQuaTimKiem = false;
    }
  }
}
