import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BookingsComponent } from './bookings/bookings.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { JoinWithOurTeamComponent } from './join-with-our-team/join-with-our-team.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CheckbookingsComponent } from './checkbookings/checkbookings.component';
import { MatTableModule } from '@angular/material/table';
import { CheckcvsComponent } from './checkcvs/checkcvs.component';
import { UploadeventsComponent } from './uploadevents/uploadevents.component';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';
import { MatSelectModule } from '@angular/material/select';
//import  { MatNativeDateModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    BookingsComponent,
    EventsComponent,
    HomeComponent,
    JoinWithOurTeamComponent,
    MainNavComponent,
    AdminComponent,
    CheckbookingsComponent,
    CheckcvsComponent,
    UploadeventsComponent,
    AccountsettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
    MatGridListModule,
    MatTableModule,
    MatSelectModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
