import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  displayedColumns  :  string[] = ['id', 'name', 'title', 'email', 'phone', 'address', 'city', 'actions'];
  dataSource : Contact[] = [];
  contact : Contact = {
    id: undefined,
    name: undefined,
    title: undefined,
    email: undefined,
    phone: undefined,
    address: undefined,
    city: undefined
  };
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.readContacts().subscribe((result)=>{   
      this.dataSource  =  result;
     })
  }
  selectContact(contact: Contact){
    this.contact = contact;
  }

  newContact(){
    this.contact = {
      id: undefined,
      name: undefined,
      title: undefined,
      email: undefined,
      phone: undefined,
      address: undefined,
      city: undefined
    };
  }

  createContact(f:any){
    this.apiService.createContact(f.value).subscribe((result)=>{
      console.log(result);
    });
    
  }

  deleteContact(id:any){
    this.apiService.deleteContact(id).subscribe((result)=>{
      console.log(result);
    });
  }

   updateContact(f:any){
    f.id = this.contact['id'];
   this.apiService.updateContact(f.value).subscribe((result)=>{
     console.log(result);
    });
 }



}
