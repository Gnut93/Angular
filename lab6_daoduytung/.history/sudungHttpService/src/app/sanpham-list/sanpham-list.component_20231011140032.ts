//sanpham-list.component.ts
import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
@Component({
  selector: 'app-sanpham-list',
  templateUrl: './sanpham-list.component.html',
  styleUrls: ['./sanpham-list.component.css']
})
export class SanphamListComponent implements OnInit {
  constructor(private d:DuLieuService) { }
  listSanPham:any;
  ngOnInit(): void {
    this.listSanPham = this.d.getSanPham().subscribe ( 
      data => this.listSanPham= data
    );
  }
}