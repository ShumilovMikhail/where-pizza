import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header.component";
import { CartModule } from "../cart/cart.module";
import { SideModalModule } from "../side-modal/side-modal.module";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, CartModule, SideModalModule],
  exports: [HeaderComponent]
})
export class HeaderModule { };
