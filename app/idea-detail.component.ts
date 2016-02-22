import {Component} from 'angular2/core';
import {Idea} from './idea';
@Component({
    inputs: ['idea'],

    selector: 'my-idea-detail',

    template: `
  <div *ngIf="idea">
    <h2>{{idea.title}} details!</h2>
    <div><label>id: </label>{{idea.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="idea.description" placeholder="description"/>
    </div>
  </div>
`,
})
export class IdeaDetailComponent {
    public idea: Idea;
}