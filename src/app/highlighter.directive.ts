import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit {

  constructor(private r: Renderer2, private e: ElementRef) {
  }

  ngOnInit() {
    this.r.setStyle(this.e.nativeElement, 'color', 'red');
  }

}
