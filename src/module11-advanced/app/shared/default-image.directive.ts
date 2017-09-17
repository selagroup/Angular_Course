import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appDefaultImage]'
})
export class DefaultImageDirective implements OnInit{

  //https://cdn.amctheatres.com/Media/Default/Images/noposter.jpg
  //http://www.reelviews.net/resources/img/default_poster.jpg
  @Input('appDefaultImage')
  private defaultImage = 'https://cdn.amctheatres.com/Media/Default/Images/noposter.jpg';

  @HostListener('error') onError(){
      this.element.nativeElement.src = this.defaultImage;
  }

  constructor(private element: ElementRef) { }

  ngOnInit(){
    console.log('directive init');
  }

}
