/*
 * Angular
 */
import {
  Component
} from '@angular/core';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HTTP_PROVIDERS } from '@angular/http';

/*
 * Components
 */
import { SimpleHTTPComponent } from 'components/SimpleHTTPComponent';
import { MoreHTTPRequests } from 'components/MoreHTTPRequests';
import {
  YouTubeSearchComponent,
  SearchBox,
  SearchResultComponent
} from 'components/YouTubeSearchComponent';

/*
 * Injectables
 */
import { youTubeServiceInjectables } from 'components/YouTubeSearchComponent';

/*
 * Webpack
 */
require('css/styles.scss');

@Component({
  selector: 'http-app',
  template: `
  <div class="container">
    <simple-http></simple-http>
    <hr/>
    <more-http></more-http>
    <hr/>
    <youtube-search></youtube-search>
  </div>
  `
})
class HttpApp {
}

@NgModule({
  declarations: [
    HttpApp,
    SimpleHTTPComponent,
    MoreHTTPRequests,
    YouTubeSearchComponent,
    SearchBox,
    SearchResultComponent
  ],
  imports: [ BrowserModule ],
  bootstrap: [ HttpApp ],
  providers: [
    HTTP_PROVIDERS,            // <--- right here
    youTubeServiceInjectables
  ]
})
class HttpAppModule {}

platformBrowserDynamic().bootstrapModule(HttpAppModule)
  .catch((err: any) => console.error(err));
