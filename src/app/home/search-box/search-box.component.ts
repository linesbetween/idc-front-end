import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../shared/search.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  searchForm: FormGroup;
  result: string;

  constructor(private searchService: SearchService,
              private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      searchTerm: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const {searchTerm} = this.searchForm.value;
    console.log('search term: ' + searchTerm);
    this.searchService.search(searchTerm).subscribe(res => {
      if (res.result.length > 0 ) {
        this.result = res.result;
      } else {
        this.result = 'unknown';
      }
      });
    this.searchForm.setValue({searchTerm: ''});
  }

}
