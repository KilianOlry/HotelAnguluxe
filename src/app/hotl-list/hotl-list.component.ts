import { Component } from '@angular/core';
import { IHotel } from './hotels';

@Component({
    selector: 'app-hotl-list',
    templateUrl: './hotl-list.component.html',
})
export class HotlListComponent {
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

    public hostelFilter = 'mot';

    public toggleIsNewBadge(): void {
        this.showBadge = !this.showBadge;
    }
}
