import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnyguPasaulisComponent } from './components/KnyguPasaulis/KnyguPasaulis.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes =[
   { path: 'home', component: HomeComponent },
   { path: 'KnyguPasaulis', component: KnyguPasaulisComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}