import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  constructor(public api: ApiService,private route: ActivatedRoute){}
  item : any;
ngOnInit(){
  const id = this.route.snapshot.paramMap.get('id');

    this.api.getDataById(id).subscribe((data)=>{
        this.item = data;
        console.log(this.item);

    })


}
}
