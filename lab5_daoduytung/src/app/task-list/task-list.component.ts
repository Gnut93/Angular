import { Component, OnInit } from '@angular/core';
import { Task } from './../task';
import { NhanVien } from '../nhan-vien';
import { DuAn } from '../du-an';
import { Router } from '@angular/router';
import { AsmService } from '../asm.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  constructor(
    private asmService:AsmService,
    private router:Router,
  ){ }
  listTask:Task[]=[];
  listDuAn:DuAn[]=[];
  listNhanVien:NhanVien[] = []
  ngOnInit(): void {
    this.listTask=this.asmService.getTask();
    this.listDuAn=this.asmService.getDuAn();
    this.listDuAn = this.listDuAn;
    this.listNhanVien =this.asmService.getNhanVien()
  }
  xoaTask(id:number=0){
    const isConfirmed = window.confirm('Bạn có muốn xóa Task không?');
    if(isConfirmed){
    this.asmService.xoaTask(id);
    this.router.navigate(['task/']);
    }
    return false;
  }
  getTenDuAn(duAnID: number): string {
    const DuAn = this.listDuAn?.find(da => da?.id === Number(duAnID));
    return DuAn?.tenDuAn || ''; 
}
getTenNhanVien(id: number = 0) {
  let listNhanVien = this.listNhanVien.find(nv => nv.id === Number(id));
  return listNhanVien?.hovaten;
}
}
