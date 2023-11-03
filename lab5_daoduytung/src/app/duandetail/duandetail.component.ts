import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsmService } from '../asm.service';
import { DuAn } from '../du-an';

@Component({
  selector: 'app-duandetail',
  templateUrl: './duandetail.component.html',
  styleUrls: ['./duandetail.component.css']
})
export class DuandetailComponent implements OnInit{
  constructor (
    private activatedRoute:ActivatedRoute,
    private asmService: AsmService
  ){}
  id:number = Number(this.activatedRoute.snapshot.params['id']);
  da = <DuAn>{}
  ngOnInit(): void {
    let kq = this.asmService.getMotDuAn(this.id);
    this.da = kq as DuAn;
  }

}
