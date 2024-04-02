import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FeedComponent } from "./feed.component";

const routes: Routes = [
  { path: '', component: FeedComponent, pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class FeedRoutingModule { }
