import { Component, OnInit } from '@angular/core';
import { IHotel } from './hotels';

@Component({
    selector: 'app-hotl-list',
    templateUrl: './hotl-list.component.html',
})
export class HotlListComponent implements OnInit {
    public title = "Liste d'hôtel";
    public showBadge: boolean | undefined;

    public hotels: IHotel[] = [
        {
            hotelId: 1,
            hotelName: 'Buea sweet life',
            description: 'Belle vue au bord de la mer',
            price: 230.5,
            imageUrl: 'assets/img/hotel-room.jpg',
        },
        {
            hotelId: 2,
            hotelName: 'Marakech',
            description: 'Profitez de la vue sur les montagnes',
            price: 145.5,
            imageUrl: 'assets/img/the-interior.jpg',
        },
        {
            hotelId: 3,
            hotelName: 'Abudja new look palace',
            description: 'Séjour complet avec service de voitures',
            price: 120.12,
            imageUrl: 'assets/img/indoors.jpg',
        },
        {
            hotelId: 4,
            hotelName: 'Cape town city',
            description: 'Magnifique cadre pour votre séjour',
            price: 135.12,
            imageUrl: 'assets/img/window.jpg',
        },
    ];
    public toggleIsNewBadge(): void {
        this.showBadge = !this.showBadge;
    }

    // Filtre

    private _hotelFilter = 'mot';

    public filteredHotels: IHotel[] = [];
    ngOnInit(): void {
        this.filteredHotels = this.hotels;
        this.hotelFilter = '';

    }


    public get hotelFilter(): string {
        return this._hotelFilter
    }


    public set hotelFilter(filter: string) {
        this._hotelFilter = filter;
        this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
    }

    private filterHotels(critere: string): IHotel[] {
        critere = critere.toLocaleLowerCase();

        const res = this.hotels.filter(
            (hotel: IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(critere) !== -1
        );

        return res;
    }

}
