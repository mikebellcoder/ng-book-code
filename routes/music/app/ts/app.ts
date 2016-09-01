/*
 * Angular Imports
 */
import {
  Component,
  provide
} from '@angular/core';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {HTTP_PROVIDERS} from '@angular/http';
import {
  RouterModule,
  provideRouter,
  RouterConfig
} from '@angular/router';
import {
  LocationStrategy,
  HashLocationStrategy,
  APP_BASE_HREF
} from '@angular/common';

/*
 * Components
 */
import {SearchComponent} from 'components/SearchComponent';
import {ArtistComponent} from 'components/ArtistComponent';
import {TrackComponent} from 'components/TrackComponent';
import {AlbumComponent} from 'components/AlbumComponent';

/*
 * Services
 */
import {SPOTIFY_PROVIDERS} from 'services/SpotifyService';
import {provideForms} from '@angular/forms';

/*
 * Webpack
 */
require('css/styles.scss');

@Component({
  selector: 'router-app',
  template: `
  <router-outlet></router-outlet>
  `
})
class RoutesDemoApp {
  query: string;
}

const routes: RouterConfig = [
  { path: '', redirectTo: 'search', terminal: true },
  { path: 'search', component: SearchComponent },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'albums/:id', component: AlbumComponent },
];

const ROUTER_PROVIDER = provideRouter(routes);

@NgModule({
  declarations: [
    RoutesDemoApp,
    SearchComponent,
    ArtistComponent,
    TrackComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  bootstrap: [ RoutesDemoApp ],
  providers: [
    ROUTER_PROVIDER,
    HTTP_PROVIDERS,
    SPOTIFY_PROVIDERS,
    provide(APP_BASE_HREF,            {useValue: '/'}),
    provide(LocationStrategy,         {useClass: HashLocationStrategy}),
    provideForms()
  ]
})
class RoutesDemoAppModule {}

platformBrowserDynamic().bootstrapModule(RoutesDemoAppModule)
  .catch((err: any) => console.error(err));
