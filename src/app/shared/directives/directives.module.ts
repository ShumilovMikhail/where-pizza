import { NgModule } from "@angular/core";
import { ModalCloseDirective } from "./modalClose.directive";
import { RemoveScrollingDirective } from "./removeScrolling.directive";

@NgModule({
  declarations: [ModalCloseDirective, RemoveScrollingDirective],
  exports: [ModalCloseDirective, RemoveScrollingDirective]
})
export class DirectivesModule { }
