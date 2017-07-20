import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener, Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appHighlightHover]'
})
export class HighlighterDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'transparent';
  @HostBinding('style.color') color;

  constructor(private r: Renderer2, private e: ElementRef) {
  }

  ngOnInit() {
    this.color = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.color = this.defaultColor;
  }
}
