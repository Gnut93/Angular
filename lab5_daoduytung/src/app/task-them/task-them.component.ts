import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { DuAn } from '../du-an';
import { NhanVien } from '../nhan-vien';
import { AsmService } from '../asm.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-task-them',
  templateUrl: './task-them.component.html',
  styleUrls: ['./task-them.component.css']
})
export class TaskThemComponent implements OnInit {
  newData : string = "";
  constructor (
    private asmService:AsmService,
    private router: Router,
    private activatedRoute:ActivatedRoute,
  ){}
  task:Task = <Task>{};
  listTask:Task[]=[];
  listNhanVien : NhanVien[] = [];
  listDuAn:DuAn[]=[];
  submitted : boolean = false;
  ngOnInit(): void {
    this.listDuAn=this.asmService.getDuAn();
    this.listDuAn = this.listDuAn;
    this.listDuAn = this.listDuAn;
    this.listTask=this.asmService.getTask();
    this.listNhanVien=this.asmService.getNhanVien();
  }
  themTask(){
    this.submitted = true;  
    if(!this.task.tenTask || !this.task.duAnID || !this.task.nhanvienID || !this.task.moTa || !this.task.status || !this.task.priority){
      return;
    }
    this.asmService.themTask(this.task);
    console.log(this.task)
    this.router.navigate(['task/']);
  }
}
