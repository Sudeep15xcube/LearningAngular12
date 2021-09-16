  import { Component} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {


jobb:any=[];//data cane type of


  constructor(private job:UserService) {
   this.job.getJob().subscribe(data=>{
      this.jobb=data;
      console.log(this.jobb);
    })

   }

  

}


