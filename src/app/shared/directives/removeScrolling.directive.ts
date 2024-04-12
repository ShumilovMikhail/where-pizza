import { Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from "@angular/core";

@Directive({
  selector: '[removeScrolling]'
})
export class RemoveScrollingDirective implements OnInit, OnDestroy {

  constructor(private readonly el: ElementRef, private readonly renderer: Renderer2) { };

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  ngOnDestroy(): void {
    this.renderer.removeStyle(document.body, 'overflow');
  }
};
