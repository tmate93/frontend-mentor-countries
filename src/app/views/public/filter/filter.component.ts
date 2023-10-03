import { Component, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, combineLatest, map, startWith } from 'rxjs';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() searchResults!: Observable<{region: string | null, keyWords: string | null}>;
  @Input() regionList!: string[];

  filter: FormGroup<{keyWords: FormControl<string | null>, region: FormControl<string | null>}>;

  constructor() {
    this.filter = new FormGroup({
      keyWords: new FormControl<string | null>(""),
      region: new FormControl<string | null>("")
    });

    const keyWords$ = this.filter.controls.keyWords.valueChanges;
    const region$ = this.filter.controls.region.valueChanges;

    this.searchResults = combineLatest([
      keyWords$.pipe(debounceTime(1000), distinctUntilChanged(), startWith(null)),
      region$.pipe(startWith(null))
    ]).pipe(
      map(([keyWords, region]) => {
        return {
          keyWords,
          region
        }
      })
    );
  }
}
