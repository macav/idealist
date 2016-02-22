import {Component} from 'angular2/core';
import {Idea} from './idea';
import {IdeaDetailComponent} from './idea-detail.component';
import {IdeaService} from './idea.service';
import {OnInit} from 'angular2/core';
import OrderByPipe from './OrderByPipe';

export class AppComponent implements OnInit {
    ngOnInit() {
    }
}

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>'
    <h2>Renuo Ideas</h2>'
    <ul class="ideas">
    <li *ngFor="#idea of ideas | orderBy:likes" [class.selected]="idea === selectedidea" (click)="onSelect(idea)">
    <span class="badge">{{idea.likes}}</span> {{idea.title}} <button (click)="like(idea)">I like it</button>
    </li>
    </ul>
    <my-idea-detail [idea]="selectedIdea"></my-idea-detail>`,


    styles:[`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .ideas {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
  }
  .ideas li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0em;
    height: 1.6em;
    border-radius: 4px;
  }
  .ideas li.selected:hover {
    color: white;
  }
  .ideas li:hover {
    color: #607D8B;
    background-color: #EEE;
    left: .1em;
  }
  .ideas .text {
    position: relative;
    top: -3px;
  }
  .ideas .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0em 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0px 0px 4px;
  }
`],
    directives: [IdeaDetailComponent],
    providers: [IdeaService],
    pipes: [OrderByPipe],

})
export class AppComponent {
    public title = 'Tour of ideas';
    public selectedIdea: Idea;
    public ideas: Idea[];
    constructor(private _ideaService: IdeaService) { }
    onSelect(idea: Idea) { this.selectedIdea = idea; }
    like(idea: Idea) { idea.likes++;}
    getIdeas() {
        this._ideaService.getIdeas().then(ideas => this.ideas = ideas);
    }
    ngOnInit() {
        this.getIdeas();
    }
}


