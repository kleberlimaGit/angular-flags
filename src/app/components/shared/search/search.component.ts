import { Component, EventEmitter, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  faSearch = faSearch;

  public search(value: string) {
    this.emmitSearch.emit(value);
  }
}
