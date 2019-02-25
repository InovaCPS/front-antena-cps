import 'fullcalendar';

import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface, SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import * as $ from 'jquery';


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
        'Hackton',
        'Palestra',
        'Encontro',
        'Reunião',
        'Workshop',
        'Desafio' 

    ];

    public type: string = 'component';

    public disabled: boolean = false;

    public config: SwiperConfigInterface = {
        a11y: true,
        direction: 'vertical',
        slidesPerView: 1,
        keyboard: true,
        mousewheel: true,
        scrollbar: false,
        navigation: true,
        pagination: false
    };

    private scrollbar: SwiperScrollbarInterface = {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true
    };

    private pagination: SwiperPaginationInterface = {
        el: '.swiper-pagination',
        clickable: true,
        hideOnClick: false
    };



    public toggleType(): void {
        this.type = (this.type === 'component') ? 'directive' : 'component';
    }

    public toggleDisabled(): void {
        this.disabled = !this.disabled;
    }

    public toggleDirection(): void {
        this.config.direction = (this.config.direction === 'horizontal') ? 'vertical' : 'horizontal';
    }

    public toggleSlidesPerView(): void {
        if (this.config.slidesPerView !== 1) {
            this.config.slidesPerView = 1;
        } else {
            this.config.slidesPerView = 2;
        }
    }

    public toggleOverlayControls(): void {
        if (this.config.navigation) {
            this.config.scrollbar = false;
            this.config.navigation = false;

            this.config.pagination = this.pagination;
        } else if (this.config.pagination) {
            this.config.navigation = false;
            this.config.pagination = false;

            this.config.scrollbar = this.scrollbar;
        } else {
            this.config.scrollbar = false;
            this.config.pagination = false;

            this.config.navigation = true;
        }

        if (this.type === 'directive' && this.directiveRef) {
            this.directiveRef.setIndex(0);
        } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
            this.componentRef.directiveRef.setIndex(0);
        }
    }

    public toggleKeyboardControl(): void {
        this.config.keyboard = !this.config.keyboard;
    }

    public toggleMouseWheelControl(): void {
        this.config.mousewheel = !this.config.mousewheel;
    }

    public onIndexChange(index: number): void {
        console.log('Swiper index: ', index);
    }

    public onSwiperEvent(event: string): void {
        console.log('Swiper event: ', event);
    }



}