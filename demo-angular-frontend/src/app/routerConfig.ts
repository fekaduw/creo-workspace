import {Route} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListComponent} from './list/list.component';

export const routes: Route[] = [
  {component: HomeComponent, path: ''},
  {component: ListComponent, path: 'list'},
];
