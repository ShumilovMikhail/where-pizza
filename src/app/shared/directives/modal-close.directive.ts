import { Directive, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit, Output } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Subscription, filter, fromEvent } from "rxjs";

@Directive({
  selector: '[modalClose]'
})
export class ModalCloseDirective implements OnInit, OnDestroy {
  @Output('modalClose') modalClose = new EventEmitter<boolean>();
  documentEventSubscribe: Subscription;

  constructor(private el: ElementRef, private readonly router: Router) { };

  ngOnInit(): void {
    setTimeout(() => {
      this.documentEventSubscribe = fromEvent(document, 'click').subscribe((event: MouseEvent) => {
        if (!event.composedPath().includes(this.el.nativeElement)) {
          this.modalClose.emit(true);
        };
      });
    }, 0);
    this.router.events.pipe(filter((events) => events instanceof NavigationEnd)).subscribe(() => {
      this.modalClose.emit(true)
    })

  };

  @HostListener('document:keydown.escape') closeModalOnEsc() {
    this.modalClose.emit(true);
  };

  ngOnDestroy(): void {
    this.documentEventSubscribe.unsubscribe();
  };

};
