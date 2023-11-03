import { Injectable } from '@angular/core';
import { DuAn } from './du-an';
import { NhanVien } from './nhan-vien';
import { Task } from './task';
@Injectable({
  providedIn: 'root'
})
export class AsmService {
  listDuAn:DuAn[] = [ 
    {id:1, tenDuAn:'Quản lý trại heo', ngayStart:'2022-03-01', tien:67000000,leader:1, thanhvien:[1,3,4]},
    {id:2, tenDuAn:'Cây xanh công viên', ngayStart:'2022-04-02', tien:98500000,leader:1, thanhvien:[1,3,4]},
    {id:3, tenDuAn:'Website Văn hóa Việt', ngayStart:'2022-04-15', tien:35000000,leader:2, thanhvien:[2,4]},
    {id:4, tenDuAn:'Website Du lịch Bụi', ngayStart:'2022-04-21',tien:75500000,leader:2, thanhvien:[2,4]},
    {id:5, tenDuAn:'Quản lý nhà thuốc Vĩnh An', ngayStart:'2022-05-2',tien:97000000,leader:3, thanhvien:[3,4]},
    {id:6, tenDuAn:'Chăm sóc thú cưng', ngayStart:'2022-02-11', tien:18000000,leader:3, thanhvien:[3,4]},
  ]
  private iddaCounter: number = 7;

  listNhanVien:NhanVien[] =[
    { id:1, hovaten:'Nguyễn Bá Đạo', ngaysinh:'2001-1-3', phai:true,khuvuc:'Bắc'}, 
    { id:2, hovaten:'Phạm Kỷ Luật', ngaysinh:'2001-5-6', phai:true,khuvuc:'Bắc'}, 
    { id:3, hovaten:'Mai Thanh Toán', ngaysinh:'2002-6-15', phai:true,khuvuc:'Nam'}, 
    { id:4, hovaten:'Cao Thị Chót Vót', ngaysinh:'2002-8-19', phai:false,khuvuc:'Nam'}, 
    { id:5, hovaten:'Mai Phạt Sáu Ngàn', ngaysinh:'2001-2-28', phai:false,khuvuc:'Trung'}, 
  ]

  private idnvCounter: number = 6;
  listTask:Task[] = [
    {id:1, tenTask:'Phân tích yêu cầu', duAnID:1, nhanvienID:1,moTa:"Phân tích các yêu cầu của khách hàng để team thực hiện",status:0,priority:1 },
    {id:2, tenTask:'Thực hiện layout cho ứng dụng', duAnID:1, nhanvienID:2,moTa:"Thực hiện layout website, chú ý kỹ responsive",status:0,priority:1 },
    {id:3, tenTask:'Tìm hiểu yêu cầu của khách hàng', duAnID:2, nhanvienID:3,moTa:"Đến công ty và ghi nhận các yêu cầu của khách hàng",status:0,priority:2 },
    {id:4, tenTask:'Đăng ký thành viên', duAnID:3, nhanvienID:4,moTa:"Thực hiện chức năng đăng ký, có capcha, mail kích hoạt",status:0,priority:1 },
    {id:5, tenTask:'Đổi pass, quên pass', duAnID:1, nhanvienID:4,moTa:"Thực hiện chức năng đỗi pass, quên pass. Nhớ kiểm tra user login, email tồn tại, pass cũ hợp lệ ",status:0,priority:1 },
    {id:6, tenTask:'Testing 1', duAnID:4, nhanvienID:3,moTa:"Kiểm tra mọi form chức năng theo các case đã liệt kê",status:0,priority:2 },
    {id:7, tenTask:'Triển khai website', duAnID:5, nhanvienID:4,moTa:"Triển khai website lên hosting đã mua",status:0,priority:2 },
    {id:8, tenTask:'Hướng dẫn sử dụng và bàn giao', duAnID:5, nhanvienID:1,moTa:"Hướng dẫn sử dụng cho khách hàng",status:0,priority:2 },
    {id:9, tenTask:'Testing 2', duAnID:4, nhanvienID:2,moTa:"Kiểm tra các tính năng bảo mật theo các yêu cầu đã nêu trong tài liệu dự án",status:0,priority:2 },
  ]
  private idtaskCounter: number = 10;

  constructor() { }
  getDuAn(){
    return this.listDuAn;
  }
  getMotDuAn(id:number=0){
    return this.listDuAn.find(da => da.id === id);
  }
  themDuAn(da:DuAn=<DuAn>{}){
    da.id = this.iddaCounter++
    this.listDuAn.push(da)
  }
  capnhatDuAn(da:DuAn=<DuAn>{}){
    let index = this.listDuAn.findIndex(da => da.id===da.id);
    this.listDuAn[index] = da;
  }
  xoaDuAn(id:number=0){
    let index = this.listDuAn.findIndex(da => da.id === id);
    this.listDuAn.splice(index,1)
  }
  getTenDuAn(duAnID: number): string {
    const DuAn = this.listDuAn.find(da => da.id === duAnID);
    return DuAn ? DuAn.tenDuAn : ''; 
}
  getNhanVien(){
    return this.listNhanVien;
  }
  getTenNhanVien(id: number = 0) {
    let listNhanVien = this.listNhanVien.find(nv => nv.id === id);
    return listNhanVien?.hovaten;
    
  }
  getMotNhanVien(id:number=0){
    return this.listNhanVien.find(nv => nv.id === id);
  }
  
  themNhanVien(nv:NhanVien=<NhanVien>{}){
    nv.id = this.idnvCounter++
    this.listNhanVien.push(nv)
  }
  capnhatNhanVien(nv:NhanVien=<NhanVien>{}){
    let index = this.listNhanVien.findIndex(nv => nv.id===nv.id);
    this.listNhanVien[index] = nv;
  }
  xoaNhanVien(id:number=0){
    let index = this.listNhanVien.findIndex(nv => nv.id === id);
    this.listNhanVien.splice(index,1)
  }
  getTask(){
    return this.listTask;
  }
  getMotTask(id:number=0){
    return this.listTask.find(task => task.id === id);
  }
  themTask(task:Task=<Task>{}){
    task.id = this.idtaskCounter++
    this.listTask.push(task)
  }
  capnhatTask(task:Task=<Task>{}){
    let index = this.listTask.findIndex(task => task.id===task.id);
    this.listTask[index] = task;
  }
  xoaTask(id:number=0){
    let index = this.listTask.findIndex(task => task.id === id);
    this.listTask.splice(index,1)
  }
}
