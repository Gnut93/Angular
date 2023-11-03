//sanpham-sua.component.ts
import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-sanpham-sua',
  templateUrl: './sanpham-sua.component.html',
  styleUrls: ['./sanpham-sua.component.css'],
})
export class SanphamSuaComponent implements OnInit {
  constructor(private d: DuLieuService) {}
  ngOnInit(): void {}
  @Input() sp: any;
  spSua(sp: any) {
    this.d.suaSanPham(sp).subscribe((data) => {
      alert('Sửa thành công');
      console.log('Sửa', data);
    });
  }
}
