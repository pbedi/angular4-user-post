import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { Address } from './address.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    name: string;
    email: string;
    age: number;
    address: Address;
    hobbies: string[];
    isEdit: boolean;

  constructor( ) { 
    console.log('Contructor ran...');

  }

  ngOnInit() {
    console.log('ng init ran ...');
    this.name = 'Steve Smith';
    this.email = 'some@example.com';
    this.age = 35;
    this.address = {
      street: '00 Parkfield st',
      city: 'Feltham',
      state: 'London'
    }
    this.hobbies = ['Write code', 'Watch movies','Listen to music'];
    this.isEdit = false;
  }
  onClick() {
    this.name = this.name === 'Bob Traver'?'Steve Smith':'Bob Traver';
  }
  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    hobby = '';
    return false;
  }
  deleteHobby(pos) {
    this.hobbies.splice(pos,1);
  }
  editUser() {
    this.isEdit = !this.isEdit;
  }

}
