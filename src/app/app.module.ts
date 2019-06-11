import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { InterceptedHttp } from 'app/service/interceptor/interceptor.service';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { FileService } from './service/file/file.service';
import { LoaderService } from './service/loader/loader-service';
import { RestService } from './service/rest/rest.service';
import { ErrorService } from './service/toast-notification-service/error-service/error.service';
import { ToastService } from './service/toast-notification-service/toast-service/toast.service';
import { FixedpluginModule } from './shared/fixedplugin/fixedplugin.module';
import { FooterModule } from './shared/footer/footer.module';
import { LoadingComponent } from './shared/loading/loading.component';
import { MadiaAttachmentModule } from './shared/media-attachment/media-attachment.component';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { PeriodComponent } from './reports/period/period.component';
import { PlantService } from './service/plant/plant.service';
import { CategoryService } from './service/category/category.service';
import { PlantacaoService } from './service/plantacao/plantacao.service';
import { ArduinoService } from './service/arduino/arduino.service';

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, loaderService: LoaderService): Http {
  return new InterceptedHttp(xhrBackend, requestOptions, loaderService);
}

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MadiaAttachmentModule
  ],
  declarations: []
})
export class MaterialModule { }

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes, { useHash: true }),
    HttpModule,
    MaterialModule,
    MatNativeDateModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedpluginModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    LoadingComponent,
    PeriodComponent
  ],
  providers: [
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, LoaderService]
    },
    RestService,
    FileService,
    ToastService,
    ErrorService,
    LoaderService,
    PlantService,
    CategoryService,
    PlantacaoService,
    ArduinoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
