import { provideRouter, RouterConfig } from '@angular/router';

import { Todo } from './todo';
import { About } from './about';
import { ProfileComponent } from './profile';
import { DashboardComponent } from './dashboard';

import { AuthGuard} from './';

export const appRoutes: RouterConfig = [
	{ path: '', component: Todo },
	{ path: 'about/:id', component: About },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
	{ path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]}

];

export const APP_ROUTER_PROVIDER = provideRouter(appRoutes);