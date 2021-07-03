import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { AdvancedFeaturesComponent } from './advanced-features/advanced-features.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'search', component: SearchComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'advanced-features', component: AdvancedFeaturesComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
