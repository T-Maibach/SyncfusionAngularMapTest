import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {
  AnnotationsService,
  BubbleService,
  DataLabelService,
  LegendService,
  MapsModule,
  MapsTooltipService,
  MarkerService,
  NavigationLineService,
  SelectionService,
  ZoomService
} from "@syncfusion/ej2-angular-maps";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MapsModule
  ],
  providers: [LegendService,
    MarkerService,
    MapsTooltipService,
    DataLabelService,
    BubbleService,
    NavigationLineService,
    SelectionService,
    AnnotationsService,
    ZoomService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
