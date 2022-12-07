import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  VERSION,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { InputComponent } from './input/input.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('iframe', { static: false }) iframe: ElementRef;
  markdown: string = MARKDOWN;

  firstInput = 5;
  doc;
  compRef: ComponentRef<InputComponent>;

  constructor(
    private vcRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) {}

  onLoad(iframe) {
    this.doc = iframe.contentDocument || iframe.contentWindow;
    this.createComponent();
  }

  createComponent() {
    const compFactory = this.resolver.resolveComponentFactory(InputComponent);
    this.compRef = this.vcRef.createComponent(compFactory);
    this.compRef.location.nativeElement.id = 'innerComp';

    this.doc.body.appendChild(this.compRef.location.nativeElement);
  }
}

const MARKDOWN = `## Markdown __rulez__!
---

### Syntax highlight
\`\`\`typescript
const language = 'typescript';
\`\`\`

### Lists
1. Ordered list
2. Another bullet point
   - Unordered list
   - Another unordered bullet

### Blockquote
> Blockquote to the max`;
