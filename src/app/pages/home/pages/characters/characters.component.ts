import {Component, OnInit} from '@angular/core';
import {MarvelService} from '../../../../services/marvel.service';
import {Observable} from 'rxjs';
import {Character} from '../../../../interfaces/character';
import {getImage} from '../../../../functions';
import {Thumbnail} from '../../../../interfaces/marvel-entity';
import {ActivatedRoute} from '@angular/router';
import {MarvelTotalCount} from '../../../../interfaces/marvel-total-count.enum';
import {MarvelLinks} from '../../../../interfaces/marvel-links.enum';

@Component({
  selector: 'app-charcters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public $characters$: Observable<Character[]>;
  page = 1;
  pages = [];

  constructor(private marvel: MarvelService,
              private route: ActivatedRoute) {
  }


  private isPage(page) {
    return page <= Math.floor(MarvelTotalCount.characters / this.marvel.charactersPaginate.limit) ? page : 1;
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if (+params.page && +params.page >= 1) {
          this.page = this.isPage(Math.round(+params.page));
          this.onGetCharachters(this.page);
        } else {
          this.onGetCharachters();
        }
      });
    this.pages = this.createPages(MarvelLinks.characters);
  }

  private createPages(link: string): Array<number> {
    const pages = [];
    switch (link) {
      case MarvelLinks.characters:
        for (let i = 0; i < MarvelTotalCount.characters; i += this.marvel.charactersPaginate.limit) {
          pages.push(i);
        }
        return pages;
    }
  }

  public onGetCharachters(page = 1): void {
    this.$characters$ = this.marvel.onGetCharacters(page);
  }

  getImage(thumbnail: Thumbnail) {
    return getImage(thumbnail);
  }
}
