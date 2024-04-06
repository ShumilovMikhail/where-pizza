import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[infoHover]'
})
export class InfoHoverDirective {
  constructor(private readonly el: ElementRef, private readonly renderer: Renderer2) { };

  @HostListener('mouseenter') showIngredients(): void {
    this.renderer.addClass(this.el.nativeElement, 'hover');
  };
  @HostListener('mouseleave') hideIngredients(): void {
    this.renderer.removeClass(this.el.nativeElement, 'hover');
  };
};
