import { Injectable } from '@angular/core';
import { DuAn } from './du-an';

@Injectable({
  providedIn: 'root',
})
export class DuanServiceService {
  constructor() {}
  listDuAn: DuAn[] = [
    {
      id: 1,
      anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdoe0mj6KcEnLxe0a83nUr3E0gV-rhv6AZ09ecbPsy2KC-s8nwAebOFt1qO__uYmjA7RY&usqp=CAU',
      tenDuAn: 'Quản lý Quán Cafe Tình Bạn',
      ngayStart: '2023-09-26',
      tien: 67000000,
      leader: 1,
      thanhvien: [1, 3, 4],
    },
    {
      id: 2,
      anh: 'https://i1-dulich.vnecdn.net/2022/09/08/-3868-1662624579.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=eaeHAYwke2RxEkZfoWeokw',
      tenDuAn: 'Quản lý hồ câu cá 3 cây xoài',
      ngayStart: '2023-10-02',
      tien: 98500000,
      leader: 1,
      thanhvien: [1, 3, 4],
    },
    {
      id: 3,
      anh: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/7/8/1065846/Sa-Pa.jpeg',
      tenDuAn: 'Website Du Lịch Phượt Việt Nam',
      ngayStart: '2023-10-10',
      tien: 35000000,
      leader: 2,
      thanhvien: [2, 4],
    },
    {
      id: 4,
      anh: 'https://cdn.hoasenhome.vn/blog-ctkm/11-2022/mua-online-tang-voucher-100k/MUA_ONLINE_TANG_NGAY_QUA_TANG__1500X750-01_-_Copy.png',
      tenDuAn: 'Website Mua Ngay',
      ngayStart: '2023-09-27',
      tien: 75500000,
      leader: 2,
      thanhvien: [2, 4],
    },
    {
      id: 5,
      anh: 'https://file.hstatic.net/200000301138/article/nha_sach_nguyen_van_cu_-_chi_nhanh_pham_huu_lau_712b86f68f2b4899a5cc2608464c03d9.jpg',
      tenDuAn: 'Quản lý nhà sách Nguyễn Văn Cừ',
      ngayStart: '2023-09-29',
      tien: 97000000,
      leader: 3,
      thanhvien: [3, 4],
    },
    {
      id: 6,
      anh: 'https://bizflyportal.mediacdn.vn/bizflyportal/1010/2428/2020/12/28/17/13/thi16091287860337.jpeg',
      tenDuAn: 'Website Chăm sóc thú cưng',
      ngayStart: '2023-09-22',
      tien: 18000000,
      leader: 3,
      thanhvien: [3, 4],
    },
  ];
  getIdDA(id: number = 0) {
    return this.listDuAn.find((x) => x.id == id);
  }
  themDuAn(da: DuAn=<DuAn>{}) {
    this.listDuAn.push(da);
  }
}
