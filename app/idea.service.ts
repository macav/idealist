import {Injectable} from 'angular2/core';
import {IDEAS} from './mock-ideas';

@Injectable()
export class IdeaService {
    getIdeas(){
        return Promise.resolve(IDEAS);
    }
}