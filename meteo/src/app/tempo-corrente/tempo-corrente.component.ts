import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tempo-corrente',
  templateUrl: './tempo-corrente.component.html',
  styleUrls: ['./tempo-corrente.component.css']
})
export class TempoCorrenteComponent {
  query: string;
  title = 'first-routed-app';
  obsCW: Observable<Object>;
  results: any;
  
  constructor(public call: ApiService) { }

  submit(query:HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsCW = this.call.searchCW(this.query);
    this.obsCW.subscribe((data) => this.results = data); 
    
  }
}
