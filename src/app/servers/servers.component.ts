import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer=false;

  serverName='Hardik';
  serverCreationStatus="not created";
  serverCreated=false;
  constructor() {

    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);
   }

  ngOnInit() {
  }

  onServerCreate(){
    this.serverCreated=true;
    this.serverCreationStatus="Server is Created"+this.serverName;
  }

  onUpdateServerName(event : any){
this.serverName=(<HTMLInputElement>event.target).value;
    
  }
}
