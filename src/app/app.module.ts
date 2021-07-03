import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { OverviewComponent } from './accomodation/overview/overview.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { FiltersComponent } from './results/filters/filters.component';
import { SortComponent } from './results/sort/sort.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './booking/payment/payment.component';
import { OnlineReceiptComponent } from './booking/online-receipt/online-receipt.component';
import { CancellationComponent } from './booking/cancellation/cancellation.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MyBookingComponent } from './user-profile/my-booking/my-booking.component';
import { AdvancedFeaturesComponent } from './advanced-features/advanced-features.component';
import { OffersComponent } from './advanced-features/offers/offers.component';
import { PushNotificationsNAlertsComponent } from './advanced-features/push-notifications-n-alerts/push-notifications-n-alerts.component';
import { BrochureComponent } from './advanced-features/brochure/brochure.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';

@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
   
    RoomsComponent,
    OverviewComponent,
    AuthComponent,
    SignupComponent,
    SigninComponent,
    SearchComponent,
    ResultsComponent,
    FiltersComponent,
    SortComponent,
    BookingComponent,
    PaymentComponent,
    OnlineReceiptComponent,
    CancellationComponent,
    UserProfileComponent,
    MyBookingComponent,
    AdvancedFeaturesComponent,
    OffersComponent,
    PushNotificationsNAlertsComponent,
    BrochureComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
