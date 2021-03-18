import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule, Routes } from "@angular/router";
import { AppBarComponent } from "./app-bar/app-bar.component";
import { ChatWindowComponent } from "./chat-window.component";

const routes: Routes = [
    {
        path: '',
        component: ChatWindowComponent
    }
]

@NgModule({
    declarations: [
        ChatWindowComponent,
        AppBarComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MatButtonModule
    ],
    providers: [],
})

export class ChatWindowModule { }