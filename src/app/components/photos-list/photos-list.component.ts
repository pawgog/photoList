import { Component, OnInit } from '@angular/core';

import { PhotosListService } from './photos-list.service';

@Component({
  selector: 'photos-list',
  templateUrl: './photos-list.component.html'
})
export class PhotosListComponent implements OnInit {

    public photosList: any;
    public searchText: string;

    constructor(private photosListService: PhotosListService) {

    }

    ngOnInit() {
        this.getPhotosList();
    }

    public getPhotosList() {
        this.photosListService.getPhotos()
        .subscribe((data) => {
            // console.log(data);
            this.photosList = data;
        },
        error => console.log(error)
        );
    }
    public clearText() {
        this.searchText = '';
    }
}
