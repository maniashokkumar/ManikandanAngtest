import { NgModule } from '@angular/core';
import { ChildActivationEnd, RouterModule, Routes } from '@angular/router';
import { AboutIELTSComponent } from './about-ielts/about-ielts.component';
import { BookatestComponent } from './bookatest/bookatest.component';
import { FreetrailComponent } from './bookatest/freetrail/freetrail.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorComponent } from './error/error.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { MasterclassComponent } from './masterclass/masterclass.component';
import { MoreaboutusComponent } from './moreaboutus/moreaboutus.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { StudyplanComponent } from './studyplan/studyplan.component';
import { TestsComponent } from './tests/tests.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
},
  {
    path:"moreaboutus",
    component:MoreaboutusComponent
  },
  {
    path:"",
    component:HomeComponent  },
    {
      path:"readmore",
      component:ReadmoreComponent
    },
    {
      path:"booktest",
      component:BookatestComponent
    },
    /* child routing*/
    {
        path:"booktest",
        children:[
          {
            path:"freetrail",
            component:FreetrailComponent
          }
        ]
    },
    
    {
      path:"readmore",
      component:ReadmoreComponent
    },{
      path:"Message",
      component:ContactusComponent
    },
    {
      path:"IETLS",
      component:AboutIELTSComponent
    },
    {
      path:"test",
      component:TestsComponent
    },
    {
      path:"faq",
      component:FaqComponent
    },{
      path:"studyplan",
      component:StudyplanComponent
    },
    {
      path:"Masterclass",
      component:MasterclassComponent
    },
    {
      path:"**",
      component:ErrorComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
