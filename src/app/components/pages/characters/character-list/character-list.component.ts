import { Component, OnInit } from '@angular/core';
import { Character } from '@app/shared/interface/character.interface';
import { CharacterService } from '@app/shared/services/character.service';

import { take } from 'rxjs/operators';

type RequestInfo = {
  next: string;
};

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];

  info: RequestInfo = {
    next: '',
  };

  private pageNum = 1;
  private query: string | undefined;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(private characterSvc: CharacterService) { }

  ngOnInit(): void {
    this.getDataFromService();
  }

  private getDataFromService(): void {
    this.characterSvc.searchCharacters(this.query, this.pageNum)
    .pipe(
      take(1)
    ).subscribe((response: any) => {
      const { info, results } = response;
      this.characters = [...this.characters, ...results];
      this.info = info;
    });
  }

}
