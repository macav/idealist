import {Component, ChangeDetectionStrategy, EventEmitter} from 'angular2/core';
import {Idea} from './idea';
import {IdeaDetailComponent} from './idea-detail.component';
import {IdeaService} from './idea.service';
import {OnInit} from 'angular2/core';
import OrderByPipe from './OrderByPipe';


@Component({
    selector: 'my-app',
    template: `
    <div class="container">
      <h1>{{title}}</h1>
      <div class="row">
        <div class="col-xs-12 col-sm-3">
          <form (ngSubmit)="addNewIdea()">
            <div class="form-group">
              <label>New idea: </label>
              <input [(ngModel)]="newIdea.title" class="form-control" placeholder="Title"/>
            </div>
            <div class="form-group">
              <label>Idea's description: </label>
              <textarea [(ngModel)]="newIdea.description" class="form-control" placeholder="Description"></textarea>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary">Add new idea</button>
            </div>
          </form>
        </div>
      </div>
      <h2>Renuo Ideas</h2>
      <ul class="list-group">
        <li *ngFor="#idea of ideas | orderBy:'likes'" [class.active]="idea === selectedIdea" (click)="onSelect(idea)" class="list-group-item">
          <span class="badge pull-left">{{idea.likes}}</span>
          {{idea.title}}
          <button class="btn btn-xs btn-primary pull-right idea-like-btn" (click)="like(idea)">I like it</button>
        </li>
      </ul>
      <my-idea-detail [idea]="selectedIdea"></my-idea-detail>
    </div>
    `,


    styles:[`
  .badge.pull-left {
    margin-right: 10px;
  }
  .badge {
    background-color: #337ab7;
  }
  li.list-group-item {
    cursor: pointer;
  }
  li.list-group-item.active > .idea-like-btn {
    background-color: #fff;
    color: #337ab7;
    font-weight: bold;
  }
`],
    directives: [IdeaDetailComponent],
    providers: [IdeaService],
    pipes: [OrderByPipe],
    events: ['likesChange'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    public title = 'Tour of ideas';
    public selectedIdea: Idea;
    public ideas: Idea[];
    public newIdea:Idea;
    likesChange = new EventEmitter();
    constructor(private _ideaService: IdeaService) {
      this.newIdea = <Idea>{};
    }
    onSelect(idea: Idea) { this.selectedIdea = idea; }
    like(idea: Idea) { idea.likes++;}
    getIdeas() {
        this._ideaService.getIdeas().then(ideas => this.ideas = ideas);
    }
    addNewIdea() {
      this.newIdea.likes = 0;
      this.ideas.push(this.newIdea);
      this.newIdea = <Idea>{};
    }
    ngOnInit() {
        this.getIdeas();
    }
}
