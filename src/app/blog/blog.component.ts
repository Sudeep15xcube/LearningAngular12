import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent  {


  page = 1;
  pageSize =5;


items=[
  {
    "id": 1,
    "fname":"bnju",
    "phn":6768949
  },
  {
    "id": 2,
    "fname":"anjadli",
    "phn":996768949
  },
    {
    "id": 3,
    "fname":"duall",
    "phn":8896768949
  },
   {
    "id": 4,
    "fname":"dall",
    "phn":77996768949
  },
   {
    "id": 5,
    "fname":"all",
    "phn":6696768949
  },
    {
    "id": 6,
    "fname":"manish",
    "phn":6696768949
  } ,
   {
    "id": 7,
    "fname":"avtar",
    "phn":6696768949
  },
   {
    "id": 8,
    "fname":"himani",
    "phn":6696768949
  },
 {
    "id": 9,
    "fname":"kapil",
    "phn":6696768949
  },
   {
    "id": 10,
    "fname":"himan",
    "phn":6696768949
  },
   {
    "id": 11,
    "fname":"kamal",
    "phn":6696768949
  },
   {
    "id": 12,
    "fname":"leela",
    "phn":6696768949
  }
]

  constructor() { 
   // for(let i = 1; i <= 100; i++){
   //    this.items.push({Name: 'Shop ' + i});
   // }
  }

  

}
