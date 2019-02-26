import 'fullcalendar';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { SwiperComponent, SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';


//Component do Modal
@Component({
    selector: 'ngbd-modal-content',
    templateUrl: './modal.component.html'
})
export class NgbdModalContent {
    constructor(public activeModal: NgbActiveModal) { }
}


//Component da Agenda
@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

    closeResult: string;
    calendar = require('../images/calendario.png');

    constructor(
        private modalService: NgbModal,
    ) { }

    ngOnInit() {
        var x = this;
        $('#calendar').fullCalendar({
            locale: 'pt-br',

            header: {
                left: 'title',
                right: 'prev,next'
            },
            dayClick: function (date, jsEvent, view) {

                x.open();

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

    open() {
        const modalRef = this.modalService.open(NgbdModalContent, { centered: true });
        modalRef.componentInstance.name = 'World';
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


    //SWIPER
    @ViewChild(SwiperComponent) componentRef?: SwiperComponent;
    @ViewChild(SwiperDirective) directiveRef?: SwiperDirective;

    public show: boolean = true;
    public slides = [
        {
            title: "Foo",
            subtitle: "Hackton"
        },
        {
            title: "Lorem",
            subtitle: "Workshop"
        },
        {
            title: "Lorem",
            subtitle: "Palestra"
        },  
        {
            title: "Lorem",
            subtitle: "Desafio"
        }
    ];

    public type: string = 'component';

    public disabled: boolean = false;

    public config: SwiperConfigInterface = {
        a11y: true,
        direction: 'vertical',
        slidesPerView: 3,
        keyboard: true,
        mousewheel: true,
        navigation: true,
    };
};