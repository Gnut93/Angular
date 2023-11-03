import { Component, OnInit } from '@angular/core';
import { DuAn } from '../du-an';
import { DuanServiceService } from '../duan-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duan-them',
  templateUrl: './duan-them.component.html',
  styleUrls: ['./duan-them.component.css']
})
export class DuanThemComponent  implements OnInit{
  constructor (
    private duanServiceService: DuanServiceService,
    private router: Router,
  )
  {}
  da:DuAn = <DuAn>{}
  themDuAn(){
    this.duanServiceService.themDuAn(this.da)
    this.router.navigate(['duan/'])
  }
  ngOnInit(): void {
  }


}
