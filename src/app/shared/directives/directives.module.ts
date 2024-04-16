import { NgModule } from "@angular/core";
import { ModalCloseDirective } from "./modal-close.directive";
import { RemoveScrollingDirective } from "./remove-scrolling.directive";
import { ShowFullDirective } from "./show-full.directive";

@NgModule({
  declarations: [ModalCloseDirective, RemoveScrollingDirective, ShowFullDirective],
  exports: [ModalCloseDirective, RemoveScrollingDirective, ShowFullDirective]
})
export class DirectivesModule { }
