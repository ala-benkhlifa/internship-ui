import {Component, Input, OnInit} from '@angular/core';
import {HelloService} from "./hello.service";

@Component({
    selector: 'hello',
    templateUrl: `hello.component.html`,
    styles: [`h1 {
        font-family: Lato;
    }`]
})
export class HelloComponent implements OnInit {

    @Input() name: string;

    person;

    constructor(private service: HelloService) {
    }

    ngOnInit() {
        this.getPerson();
    }

    getPerson() {
        this.person = this.service.getPerson();
    }


}
