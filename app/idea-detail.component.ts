import {Component} from 'angular2/core';
import {Idea} from './idea';
@Component({
    inputs: ['idea'],

    selector: 'my-idea-detail',

    template: `
  <form *ngIf="idea" class="form-horizontal">
    <h2>{{idea.title}} details!</h2>
    <div class="form-group">
      <label class="col-sm-2 control-label">ID: </label>
      <div class="col-xs-10">
        <p class="form-control-static">{{idea.id}}</p>
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">Name: </label>
      <div class="col-xs-10">
        <p class="form-control-static">{{idea.title}}</p>
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">Description: </label>
      <div class="col-xs-10">
        <p class="form-control-static">{{idea.description}}</p>
      </div>
    </div>
  </form>
`,
})
export class IdeaDetailComponent {
    public idea: Idea;
}
