System.register(['angular2/core', './idea-detail.component', './idea.service', './OrderByPipe'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, idea_detail_component_1, idea_service_1, OrderByPipe_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (idea_detail_component_1_1) {
                idea_detail_component_1 = idea_detail_component_1_1;
            },
            function (idea_service_1_1) {
                idea_service_1 = idea_service_1_1;
            },
            function (OrderByPipe_1_1) {
                OrderByPipe_1 = OrderByPipe_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_ideaService) {
                    this._ideaService = _ideaService;
                    this.title = 'Tour of ideas';
                    this.likesChange = new core_1.EventEmitter();
                    this.newIdea = {};
                }
                AppComponent.prototype.onSelect = function (idea) { this.selectedIdea = idea; };
                AppComponent.prototype.like = function (idea) { idea.likes++; };
                AppComponent.prototype.getIdeas = function () {
                    var _this = this;
                    this._ideaService.getIdeas().then(function (ideas) { return _this.ideas = ideas; });
                };
                AppComponent.prototype.addNewIdea = function () {
                    this.newIdea.likes = 0;
                    this.ideas.push(this.newIdea);
                    this.newIdea = {};
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getIdeas();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"container\">\n      <h1>{{title}}</h1>\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-3\">\n          <form (ngSubmit)=\"addNewIdea()\">\n            <div class=\"form-group\">\n              <label>New idea: </label>\n              <input [(ngModel)]=\"newIdea.title\" class=\"form-control\" placeholder=\"Title\"/>\n            </div>\n            <div class=\"form-group\">\n              <label>Idea's description: </label>\n              <textarea [(ngModel)]=\"newIdea.description\" class=\"form-control\" placeholder=\"Description\"></textarea>\n            </div>\n            <div class=\"form-group\">\n              <button type=\"submit\" class=\"btn btn-primary\">Add new idea</button>\n            </div>\n          </form>\n        </div>\n      </div>\n      <h2>Renuo Ideas</h2>\n      <ul class=\"list-group\">\n        <li *ngFor=\"#idea of ideas | orderBy:'likes'\" [class.active]=\"idea === selectedIdea\" (click)=\"onSelect(idea)\" class=\"list-group-item\">\n          <span class=\"badge pull-left\">{{idea.likes}}</span>\n          {{idea.title}}\n          <button class=\"btn btn-xs btn-primary pull-right idea-like-btn\" (click)=\"like(idea)\">I like it</button>\n        </li>\n      </ul>\n      <my-idea-detail [idea]=\"selectedIdea\"></my-idea-detail>\n    </div>\n    ",
                        styles: ["\n  .badge.pull-left {\n    margin-right: 10px;\n  }\n  .badge {\n    background-color: #337ab7;\n  }\n  li.list-group-item {\n    cursor: pointer;\n  }\n  li.list-group-item.active > .idea-like-btn {\n    background-color: #fff;\n    color: #337ab7;\n    font-weight: bold;\n  }\n"],
                        directives: [idea_detail_component_1.IdeaDetailComponent],
                        providers: [idea_service_1.IdeaService],
                        pipes: [OrderByPipe_1.default],
                        events: ['likesChange'],
                    }), 
                    __metadata('design:paramtypes', [idea_service_1.IdeaService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map