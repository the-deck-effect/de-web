import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlayerModule } from 'src/video/video-player/video-player.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VideoPlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
