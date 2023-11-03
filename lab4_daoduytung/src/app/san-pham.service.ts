import { Injectable } from '@angular/core';
import { ISanpham } from './isanpham';

@Injectable({
  providedIn: 'root',
})
export class SanPhamService {
  products: ISanpham[] = [
    {
      id: 1,
      tensp: 'Leaf Rake',
      code: 'GDN-0011',
      giasp: 19.95,
      mota: 'Leaf rake with 48-inch wooden handle',
      urlImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBSxJ_kJHltG7zhZ4i5U_-SNOyPvh6vBDQUglMlgJf2Ng2gATqCHwwlzA7vfps_o7BhAo&usqp=CAU',
      ngay: 'March 19, 2016',
      starRate: 3.2,
    },
    {
      id: 2,
      tensp: 'Garden Cart',
      code: 'GDN-0023',
      giasp: 32.99,
      mota: '15 gallon capacity rolling garden cart',
      urlImage:
        'https://www.theworkplacedepot.co.uk/media/catalog/product/cache/152055169f3e0e11783546316afd844f/g/a/garden-trolley-cart-0001.jpg',
      ngay: 'March 18, 2016',
      starRate: 4.2,
    },
    {
      id: 5,
      tensp: 'Hammer',
      code: 'TBX-0048',
      giasp: 8.9,
      mota: 'Curved claw steel hammer',
      urlImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVOhH2G0GGrVvmkL2hA_t8M2tfHfmQXhPoaQ&usqp=CAU',
      ngay: 'May 21, 2016',
      starRate: 3.8,
    },
    {
      id: 8,
      tensp: 'Saw',
      code: 'TBX-0022',
      giasp: 11.55,
      mota: '15-inch steel blade hand saw',
      urlImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUDHp334Iqk1jnPpNJuVJwq2_gkg64RdxAQ&usqp=CAU',
      ngay: 'May 15, 2016',
      starRate: 3.7,
    },
    {
      id: 10,
      tensp: 'Video Game Controller',
      code: 'GMG-0042',
      giasp: 35.95,
      mota: 'Standard two-button video game controller',
      urlImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb38ak5TWRhqg9egzq9GHnR99cvHtCSQcm9KfxcwDPwd98dkq-Edip89nfSWw0PhgxzfQ&usqp=CAU',
      ngay: 'October 15, 2015',
      starRate: 4.6,
    },
  ];
  getSanPham() {
    return this.products;
  }
  getMotSanPham(id: number = 0) {
    return this.products.find((sp) => sp.id == id);
  }
  themSanPham(sp: ISanpham = <ISanpham>{}) {
    this.products.push(sp);
  }
  capnhatSanPham(sp: ISanpham = <ISanpham>{}) {
    let index = this.products.findIndex((p) => p.id == sp.id);
    this.products[index] = sp;
  }
  xoaSanPham(id: number = 0) {
    let index = this.products.findIndex((p) => p.id == id);
    this.products.splice(index, 1);
  }
  constructor() {}
}
