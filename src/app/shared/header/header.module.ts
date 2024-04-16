import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header.component";
import { CartModule } from "../cart/cart.module";
import { SideModalModule } from "../side-modal/side-modal.module";
import { RouterModule } from "@angular/router";
import { DirectivesModule } from "../directives/directives.module";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, CartModule, SideModalModule, RouterModule, DirectivesModule],
  exports: [HeaderComponent]
})
export class HeaderModule { };
