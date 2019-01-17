import { Component } from '@angular/core';


@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{
serverId:number=10;
status:string='xv';

constructor(){
this.status=Math.random() > 0.5 ? 'online' : 'offline';
}
getStatus(){
    return this.status;
}

getColor(){
    return this.status==='online'?'green':'red';
}
}