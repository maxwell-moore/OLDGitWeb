import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MathPageComponent } from './MathPage/Math-Page.component';
import { PersonalPageComponent } from './PersonalPage/Personal-Page.component';
import { WelcomePageComponent } from './WelcomePage/Welcome-Page.component';
import { EngPageComponent } from './EngPage/Eng-Page.component';

@NgModule({
  declarations: [
    AppComponent,
    MathPageComponent,
    PersonalPageComponent,
    WelcomePageComponent,
    EngPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{path:'MathPage',component: MathPageComponent},
    {path:'EngPage',component: EngPageComponent},
    {path: 'welcome', component: WelcomePageComponent},    
    {path: 'personal', component: PersonalPageComponent},
    {path: '',redirectTo: 'welcome', pathMatch: 'full'},
    {path: '**',redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
