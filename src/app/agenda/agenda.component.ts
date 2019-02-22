import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";
import 'fullcalendar';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-agenda',
    templateUrl:'./agenda.component.html',
    styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

    closeResult: string;
    content: string = `
   
    <div class="modal fade" id="modalLogin" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Events</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `
    calendar = require('../images/calendario.png');


    constructor(
        private modalService: NgbModal,
    ) { }

    ngOnInit() {
        $('#calendar').fullCalendar({
            locale: 'pt-br',

            header: {
                left: 'title',
                right: 'prev,next'
            },
            dayClick: function (date, jsEvent, view) {

                open(this.content)
                alert('Clicked on: ' + date.format());
                alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
                alert('Current view: ' + view.name);

                // cor do fundo
                $(this).css('background-color', 'gray');
            },

            defaultView: 'month',
            events: [
                {
                    title: 'CPS Hackton',
                    start: '2019-02-02T14:30:00',
                    Boolean, default: false,
                    allDay: false
                },
                {
                    title: 'CPS Encontro',
                    start: '2019-02-06T15:30:00',
                    allDay: false
                },
                {
                    title: 'CPS Palestra',
                    start: '2019-02-11T17:30:00',
                    allDay: false
                },
                {
                    title: 'CPS Workshop',
                    start: '2019-02-22T11:30:00',
                    allDay: false
                },
                {
                    title: 'CPS Cadastro',
                    start: '2019-02-28T13:30:00',
                    allDay: false
                }
            ],
            timeFormat: 'H(:mm)'

        });
    }

    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return ' aperte o ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return ' aperte o backdrop';
        } else { 
            return `with: ${reason}`;
        }
    }
}

