import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeComponent } from './liste/liste.component';
import { GestionComponent } from './gestion/gestion.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'liste', component: ListeComponent },
    { path: 'gestion', component: GestionComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path: '**', component: AccueilComponent },

];
