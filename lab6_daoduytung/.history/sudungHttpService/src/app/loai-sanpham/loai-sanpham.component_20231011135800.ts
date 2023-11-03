import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-loai-sanpham',
  templateUrl: './loai-sanpham.component.html',
  styleUrls: ['./loai-sanpham.component.css']
})
export class LoaiSanphamComponent implements OnInit {
  constructor(private _http:HttpClient) { }
  
  ngOnInit(): void {}
}