import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import { TrelloService } from '../../services/trello.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public username;
  public dataList =[];
  public dataFavorite = [];
  faSearch = faSearch;
  faStar = faStar;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private trelloService: TrelloService
    ) { }

  ngOnInit() {
   let user = this.route.snapshot.paramMap.get('name');
   this.username = user;
  }

  searchForm = new FormGroup({
    table: new FormControl(''),
  });
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.trelloService.getBoards(this.searchForm.value.table).subscribe(
      response=>{
        
        this.dataList = response.boards;
        
        
       }, 
       error =>{
         console.log(<any>error);
       }
    );
  }

  onClickMe(data){
    
    const index: number = this.dataList.indexOf(data);
    this.dataFavorite.push(data); 
    if (index !== -1) {
        this.dataList.splice(index, 1);
    }   

      
  }


  onClickMeRemove(data){
    this.dataList.push(data);
    const index: number = this.dataFavorite.indexOf(data);
    if (index !== -1) {
        this.dataFavorite.splice(index, 1);
    }  
  }

}
