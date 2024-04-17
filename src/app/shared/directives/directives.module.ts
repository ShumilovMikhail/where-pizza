import { NgModule } from "@angular/core";
import { ModalCloseDirective } from "./modal-close.directive";
import { RemoveScrollingDirective } from "./remove-scrolling.directive";
import { ShowFullDirective } from "./show-full.directive";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ModalCloseDirective, RemoveScrollingDirective, ShowFullDirective],
  imports: [RouterModule],
  exports: [ModalCloseDirective, RemoveScrollingDirective, ShowFullDirective]
})
export class DirectivesModule { }
