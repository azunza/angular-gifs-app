import { Gif } from '../../../gifs/intefaces/gifs.interfaces';
import { GifsService } from './../../../gifs/services/gifs.service';
import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @ViewChild('tagValueInput')
  public tagValueInput!: ElementRef<HTMLButtonElement>

  constructor(private gifsService:GifsService) {}

  get tags() {
    return this.gifsService.tagsHistory;
  }

  getGifs(tag:string):void {
    this.gifsService.searchTag(tag);
  }

}
