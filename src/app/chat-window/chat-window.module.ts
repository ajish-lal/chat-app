import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AppBarComponent } from "./app-bar/app-bar.component";
import { ChatWindowComponent } from "./chat-window.component";
import { UserListComponent } from './user-list/user-list.component';
import { MessagesComponent } from './messages/messages.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from '@angular/material/list';

const routes: Routes = [
    {
        path: '',
        component: ChatWindowComponent
    }
]

@NgModule({
    declarations: [
        ChatWindowComponent,
        AppBarComponent,
        UserListComponent,
        MessagesComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatListModule
    ],
    providers: [],
})

export class ChatWindowModule { }