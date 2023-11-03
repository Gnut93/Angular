import { Component, OnInit } from '@angular/core';
import { DuAn } from '../du-an';
import { DuanServiceService } from '../duan-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-duan-detail',
  templateUrl: './duan-detail.component.html',
  styleUrls: ['./duan-detail.component.css'],
})
export class DuanDetailComponent implements OnInit {
  constructor(
    private duanList: DuanServiceService,
    private router: ActivatedRoute
  ) {}
  duan: DuAn | undefined;
  ngOnInit(): void {
    const idDA = Number(this.router.snapshot.params['id']);
    this.duan = this.duanList.getIdDA(idDA);
  }
}
