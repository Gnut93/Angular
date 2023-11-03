import { Component } from '@angular/core';
import { NhanVien } from '../nhan-vien';

@Component({
  selector: 'app-nv-list',
  templateUrl: './nv-list.component.html',
  styleUrls: ['./nv-list.component.css'],
})
export class NvListComponent {
  listNhanVien: NhanVien[] = [
    {
      id: 1,
      anh: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg',
      ho: 'Nguyễn Bá',
      ten: 'Đạo',
      ngaysinh: '2001-1-3',
      phai: true,
      khuvuc: 'Bắc',
    },
    {
      id: 2,
      anh: 'https://img.freepik.com/premium-psd/3d-illustration-business-man-with-glasses_23-2149436193.jpg',

      ho: 'Phạm Kỷ',
      ten: 'Luật',
      ngaysinh: '2001-5-6',
      phai: true,
      khuvuc: 'Bắc',
    },
    {
      id: 3,
      anh: 'https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436191.jpg',

      ho: 'Mai Thanh',
      ten: 'Toán',
      ngaysinh: '2002-6-15',
      phai: true,
      khuvuc: 'Nam',
    },
    {
      id: 4,
      anh: 'https://img.freepik.com/free-psd/3d-illustration-person-with-long-hair_23-2149436197.jpg',

      ho: 'Cao Thị Chót',
      ten: 'Vót',
      ngaysinh: '2002-8-19',
      phai: false,
      khuvuc: 'Nam',
    },
    {
      id: 5,
      anh: 'https://img.freepik.com/free-psd/3d-illustration-person-tank-top_23-2149436199.jpg',

      ho: 'Mai Phạt Sáu',
      ten: 'Ngàn',
      ngaysinh: '2001-2-28',
      phai: false,
      khuvuc: 'Trung',
    },
  ];
  // viết hàm để phân biệt phái nam hay nữ
  // hàm trả về true nếu là nam
  // hàm trả về false nếu là nữ
  isNam(nv: NhanVien) {
    return nv.phai;
  }
  
}
