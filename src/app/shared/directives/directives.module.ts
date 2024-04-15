import { NgModule } from "@angular/core";
import { ModalCloseDirective } from "./modalClose.directive";
import { RemoveScrollingDirective } from "./removeScrolling.directive";
import { ShowFullDirective } from "./showFull.directive";

@NgModule({
  declarations: [ModalCloseDirective, RemoveScrollingDirective, ShowFullDirective],
  exports: [ModalCloseDirective, RemoveScrollingDirective, ShowFullDirective]
})
export class DirectivesModule { }
