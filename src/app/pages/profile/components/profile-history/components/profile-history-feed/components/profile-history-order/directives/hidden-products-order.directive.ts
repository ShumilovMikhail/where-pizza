import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2, inject } from "@angular/core";

@Directive({
  selector: '[hidden-products]'
})
export class HiddenProductsOrderDirective {

  @Input({ required: true }) buttonToggleClass: string;
  @Input({ required: true }) productsHidden: boolean
  private readonly renderer = inject(Renderer2);
  constructor(private readonly order: ElementRef) {
  };

  @HostListener('click', ['$event']) toggle(event: Event): void {
    const targetElement = event.target as HTMLElement;
    if (targetElement.classList.contains(this.buttonToggleClass)) {
      const action = this.productsHidden ? this.renderer.addClass : this.renderer.removeClass;
      action.bind(this.renderer)(this.order.nativeElement, 'visibility-products');
      this.productsHidden = !this.productsHidden;
    };
  };
};
