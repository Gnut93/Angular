import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { DuAn } from '../du-an';
import { NhanVien } from '../nhan-vien';
import { AsmService } from '../asm.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-task-sua',
  templateUrl: './task-sua.component.html',
  styleUrls: ['./task-sua.component.css']
})
export class TaskSuaComponent implements OnInit {
  constructor(
    private asmService:AsmService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
  ){}
  id:number = Number(this.activatedRoute.snapshot.params['id']);
  task:Task = <Task>{}
  listDuAn:DuAn[]=[];
  listNhanVien:NhanVien[] = []
  submitted: boolean = false
  ngOnInit(): void {
    let kq = this.asmService.getMotTask(this.id);
    this.task = kq as Task;
    this.listDuAn=this.asmService.getDuAn();
    this.listDuAn = this.listDuAn;
    this.listDuAn = this.listDuAn;
    this.listNhanVien=this.asmService.getNhanVien();
  }
  capnhatTask(){
    console.log(this.task);
    this.submitted = true;  
    const isConfirmed = window.confirm("bạn có muốn cập nhật task  không");
    if(!this.task.tenTask || 
      this.task.tenTask.trim() === '' ||  
      this.task.duAnID === null || 
      this.task.duAnID === undefined || 
      this.task.nhanvienID === null || 
      this.task.nhanvienID === undefined || 
      this.task.status === null || 
      this.task.status === undefined || 
      this.task.priority === null || 
      this.task.priority === undefined || 
      !this.task.moTa){
      return;
    }

    if(isConfirmed){
    this.asmService.capnhatTask(this.task);
    this.router.navigate(["/task"])
  }
}
}
