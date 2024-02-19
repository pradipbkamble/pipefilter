import { Component } from '@angular/core';
import { cricketers } from './arryinfo/infoarry';
import { Iplayers } from './interface/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'pipefilter';
  crickettam:Array<Iplayers>=cricketers
searchcountry!:string;
}
