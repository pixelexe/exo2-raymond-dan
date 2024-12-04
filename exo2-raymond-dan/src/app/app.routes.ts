import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeComponent } from './liste/liste.component';
import { GestionComponent } from './gestion/gestion.component';

export const routes: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'liste', component: ListeComponent },
    { path: 'gestion', component: GestionComponent },
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path: '**', component: AccueilComponent },

];
