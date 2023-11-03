//du-lieu-service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class DuLieuService {
  constructor(private h: HttpClient) {}
  getSanPham() {
    return this.h.get('http://localhost:3000/sanpham');
  }
  themSanPham(sp:any){
    return this.h.post('http://localhost:3000/sanpham',sp);
}
}
