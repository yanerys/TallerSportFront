import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SportListComponent} from '../sport/sport-list/sport-list.component';
import {SportsmanListComponent} from '../sportsman/sportsman-list/sportsman-list.component';



const routes: Routes = [
    
    {
        path: 'sport',
        children: [
            {
                path: 'list',
                component: SportListComponent
            }
        ]
    },
    {
        path: 'sportsman',
        children: [
            {
                path: 'list',
                component: SportsmanListComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {
    
}