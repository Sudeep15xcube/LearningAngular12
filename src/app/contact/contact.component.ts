import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

name ='';
term:any="";
 

p:number=1;

list=[
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
  constructor(private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.name=this.route.snapshot.params.name;
  }

}
