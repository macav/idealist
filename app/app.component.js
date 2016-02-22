System.register(['angular2/core', './idea-detail.component', './idea.service', './OrderByPipe'], function(exports_1) {
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
                function AppComponent() {
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            AppComponent = (function () {
                function AppComponent(_ideaService) {
                    this._ideaService = _ideaService;
                    this.title = 'Tour of ideas';
                }
                AppComponent.prototype.onSelect = function (idea) { this.selectedIdea = idea; };
                AppComponent.prototype.like = function (idea) { idea.likes++; };
                AppComponent.prototype.getIdeas = function () {
                    var _this = this;
                    this._ideaService.getIdeas().then(function (ideas) { return _this.ideas = ideas; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getIdeas();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>'\n    <h2>Renuo Ideas</h2>'\n    <ul class=\"ideas\">\n    <li *ngFor=\"#idea of ideas | orderBy:likes\" [class.selected]=\"idea === selectedidea\" (click)=\"onSelect(idea)\">\n    <span class=\"badge\">{{idea.likes}}</span> {{idea.title}} <button (click)=\"like(idea)\">I like it</button>\n    </li>\n    </ul>\n    <my-idea-detail [idea]=\"selectedIdea\"></my-idea-detail>",
                        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .ideas {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n  }\n  .ideas li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0em;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .ideas li.selected:hover {\n    color: white;\n  }\n  .ideas li:hover {\n    color: #607D8B;\n    background-color: #EEE;\n    left: .1em;\n  }\n  .ideas .text {\n    position: relative;\n    top: -3px;\n  }\n  .ideas .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0em 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0px 0px 4px;\n  }\n"],
                        directives: [idea_detail_component_1.IdeaDetailComponent],
                        providers: [idea_service_1.IdeaService],
                        pipes: [OrderByPipe_1.default],
                    }), 
                    __metadata('design:paramtypes', [idea_service_1.IdeaService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map