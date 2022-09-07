import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  search(value: string) {
    console.log(value);
    if(value && value.length > 3) {
      this.router.navigate(['/character-list'],
      { queryParams: { query: value } });
    }
  }

}
