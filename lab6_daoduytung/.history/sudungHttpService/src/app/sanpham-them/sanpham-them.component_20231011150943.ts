//sanpham-them.component.ts
import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
@Component({
  selector: 'app-sanpham-them',
  templateUrl: './sanpham-them.component.html',
  styleUrls: ['./sanpham-them.component.css']
})
export class SanphamThemComponent implements OnInit {
  constructor(private d:DuLieuService) { }
  ngOnInit(): void { }
  spthem(sp:any){
    var tensp= sp.tensp;
    var giasp= sp.giasp;
    console.log(tensp, giasp);
    this.d.themSanPham(sp).subscribe ( data => alert('Thêm thành công'));
  }
  con
}