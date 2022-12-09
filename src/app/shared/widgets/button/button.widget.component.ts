import { CommonModule } from "@angular/common";
import { Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from "@angular/core";

@Component({
    selector: 'app_button',
    standalone: true,
    imports: [
        CommonModule
    ],
    templateUrl: 'button.widget.component.html',
    styleUrls: [ 'button.widget.component.scss' ]
})
export class ButtonComponent {
    @ViewChild('wrapper') wrapper: ElementRef | undefined;

    @Input() color: string = 'red';
    @Output() clicked = new EventEmitter<MouseEvent>();

    private _small: boolean = false;
    @Input()
    get small() { return this._small; }
    set small(value: any) { console.log(value); this._small = value != null && value != undefined; }

    constructor() {}
    ngOnChanges(changes: SimpleChanges) {
        if(changes['color']) {
            const color: string = changes['color'].currentValue;
            this.setColor(color);
        }
    }
    ngAfterViewInit() {
        this.setColor(this.color);
    }

    setColor(color: string) {
        this.wrapper?.nativeElement.style.setProperty(`background`, color);
        this.wrapper?.nativeElement.style.setProperty(`border-bottom-color`, color);

    }
}
