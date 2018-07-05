import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { PhotosListService } from './photos-list.service';

import { PhotosListComponent } from './photos-list.component';
import { SearchPhotoPipe } from './search.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [
    PhotosListComponent,
    SearchPhotoPipe
  ],
  providers: [
    PhotosListService
  ],
  exports: [
    PhotosListComponent
  ]
})
export class PhotosListModule { }
