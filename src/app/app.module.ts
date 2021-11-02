import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { MidcontainerComponent } from './midcontainer/midcontainer.component';
import { ThreecardsComponent } from './threecards/threecards.component';
import { WritingtaslcardComponent } from './writingtaslcard/writingtaslcard.component';
import { AuthorprofileComponent } from './authorprofile/authorprofile.component';
import { MoreaboutusComponent } from './moreaboutus/moreaboutus.component';
import { HomeComponent } from './home/home.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { BookatestComponent } from './bookatest/bookatest.component';
import { ViedocontainerComponent } from './viedocontainer/viedocontainer.component';
import { ReviewComponent } from './review/review.component';
import { SocialblogComponent } from './socialblog/socialblog.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutIELTSComponent } from './about-ielts/about-ielts.component';
import { FaqComponent } from './faq/faq.component';
import { TestsComponent } from './tests/tests.component';
import { StudyplanComponent } from './studyplan/studyplan.component';
import { MasterclassComponent } from './masterclass/masterclass.component';
import { FreetrailComponent } from './bookatest/freetrail/freetrail.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    MidcontainerComponent,
    ThreecardsComponent,
    WritingtaslcardComponent,
    AuthorprofileComponent,
    MoreaboutusComponent,
    HomeComponent,
    ReadmoreComponent,
    BookatestComponent,
    ViedocontainerComponent,
    ReviewComponent,
    SocialblogComponent,
    FooterComponent,
    ContactusComponent,
    AboutIELTSComponent,
    FaqComponent,
    TestsComponent,
    StudyplanComponent,
    MasterclassComponent,
    FreetrailComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
