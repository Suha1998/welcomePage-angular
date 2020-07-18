import { HomeComponent } from './home/home.component';
import { BookingsComponent } from './bookings/bookings.component';
import { EventsComponent } from './events/events.component';
import { JoinWithOurTeamComponent } from './join-with-our-team/join-with-our-team.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'bookings', component: BookingsComponent},
  {path: 'events', component: EventsComponent},
  {path: 'join_with_our_team', component: JoinWithOurTeamComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
