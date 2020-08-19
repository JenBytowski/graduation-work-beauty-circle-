import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { MastersListComponent } from './masters/masters-list/masters-list.component';
import {MasterProfileComponent} from "./masters/master-profile/master-profile.component";

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'masters',
        component: MastersListComponent,
        pathMatch: 'full'
    },
    {
        path: 'master/:id',
        component: MasterProfileComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}