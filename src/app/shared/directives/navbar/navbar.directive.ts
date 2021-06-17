import { Directive, HostBinding, HostListener, Input } from '@angular/core';

enum Position {
  default = '',
  top = 'fixed-top',
  bottom = 'fixed-bottom'
}

enum NavbarSize {
  default = 'navbar-expand-sm',
  small = 'navbar-expand-md',
  large = 'navbar-expand-lg'
}

enum NavbarColor {
  light = 'navbar-light',
  dark = 'navbar-dark'
}

enum NavbarBg {
  light = 'bg-light',
  transparent = 'bg-transparent'
}

@Directive({
  selector: '[appNavbar]'
})
export class NavbarDirective {

  @Input() navbarPosition: 'default' | 'top' | 'bottom' = 'top'
  @Input() navbarSize: 'default' | 'small' | 'large' = 'large'

  navbarBg: string = NavbarBg.transparent
  navbarColor: string = NavbarColor.dark

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement
    if (window.pageYOffset > element.clientHeight) {
      this.navbarBg = NavbarBg.light
      this.navbarColor = NavbarColor.light
    } else {
      this.navbarBg = NavbarBg.transparent
      this.navbarColor = NavbarColor.dark
    }
  }


  @HostBinding('class')
  get applyStyle(): string {
    const defaultPosition: Position = Position[this.navbarPosition]
    const defaultSize: NavbarSize = NavbarSize[this.navbarSize]

    return `navbar ${defaultPosition} ${defaultSize} ${this.navbarBg} ${this.navbarColor} scrolled`
  }

  constructor() { }


}
