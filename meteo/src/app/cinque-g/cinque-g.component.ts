import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cinque-g',
  templateUrl: './cinque-g.component.html',
  styleUrls: ['./cinque-g.component.css']
})
export class CinqueGComponent {
  query: string;
  title = 'first-routed-app';
  obs: Observable<Object>;
  results: any;
  selectedIndex: number = 0;

  constructor(public call: ApiService) { }

  submit(query: HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obs = this.call.search5D(this.query);
    this.obs.subscribe((data) => {
      this.results = data;
      this.selectedIndex = 0; // Reset selectedIndex when new data is fetched
    });
  }

  nextItem() {
    this.selectedIndex = (this.selectedIndex === this.results.list.length - 1) ? 0 : this.selectedIndex + 1;
  }

  prevItem() {
    this.selectedIndex = (this.selectedIndex === 0) ? this.results.list.length - 1 : this.selectedIndex - 1;
  }

}
