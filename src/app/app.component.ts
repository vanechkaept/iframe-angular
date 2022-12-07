import { Component, ComponentFactoryResolver, ComponentRef, ElementRef, VERSION, ViewChild, ViewContainerRef } from '@angular/core';
import { InputComponent } from './input/input.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('iframe', {static: false}) iframe: ElementRef;

  firstInput = 5;
  doc;
  compRef: ComponentRef<InputComponent>;

  constructor(private vcRef: ViewContainerRef, private resolver: ComponentFactoryResolver) { }

  onLoad(iframe){
    this.doc = iframe.contentDocument || iframe.contentWindow;
    this.createComponent();
  }

  createComponent() {
    const compFactory = this.resolver.resolveComponentFactory(InputComponent);
    this.compRef = this.vcRef.createComponent(compFactory);
    this.compRef.location.nativeElement.id = 'innerComp';

    this.doc.body.appendChild(this.compRef.location.nativeElement);
  }

  markdown = markdown;
}

const markdown =
  '##### About This is an example site made for the [Add Pages to Your Angular <br> <br>' +
  '  Website Using Markdown' +
  ' Files](https://www.makeuseof.com/angular-markdown-files-website/) tutorial. +##' +
  'To Run - Run `npm install` in the root directory to add the necessary npm' +
  'packages to the project. - Once completed, run `ng serve`. - Navigate to' +
  '`localhost:4200` in a browser. ## To Build - Run `ng build` to build the' +
  'project. The build artifacts will be stored in the dist/ directory. - Use `ng' +
  ' build --prod` for a production build.';
