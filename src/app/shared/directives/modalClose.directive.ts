import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Subscription, fromEvent } from "rxjs";

@Directive({
  selector: '[modalClose]'
})
export class ModalCloseDirective implements OnInit, OnDestroy {
  @Output('modalClose') modalClose = new EventEmitter<boolean>();
  documentEventSubscribe: Subscription;

  constructor(private el: ElementRef) { };

  ngOnInit(): void {
    this.documentEventSubscribe = fromEvent(document, 'click').subscribe((event: MouseEvent) => {
      if (!event.composedPath().includes(this.el.nativeElement)) {
        this.modalClose.emit(true);
      };
    });
  };

  ngOnDestroy(): void {
    this.documentEventSubscribe.unsubscribe();
  };
};
