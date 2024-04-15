import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[show-full]'
})
export class ShowFullDirective implements OnInit {
  buttonShowFull: Element

  constructor(private readonly el: ElementRef, private readonly renderer: Renderer2) { };

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'hidden-full');
    this.appendButtonShowFull()
  };

  private appendButtonShowFull() {
    this.buttonShowFull = this.renderer.createElement('button');
    this.renderer.addClass(this.buttonShowFull, 'btn');
    this.renderer.addClass(this.buttonShowFull, 'show-full');
    this.renderer.addClass(this.buttonShowFull, 'subtitle-secondary');
    const buttonText = this.renderer.createText('Показать полностью');
    this.renderer.appendChild(this.buttonShowFull, buttonText);
    this.renderer.appendChild(this.el.nativeElement.parentNode, this.buttonShowFull);
  }

  @HostListener('document:click', ['$event.target']) onClick(target) {
    if (target === this.el.nativeElement.nextElementSibling) {
      this.renderer.removeClass(this.el.nativeElement, 'hidden-full');
      this.renderer.removeChild(this.el.nativeElement.parentNode, this.buttonShowFull)
    }
  }
};
