import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  providers: [ContactService]
})
export class ContactListComponent implements OnInit {

  herokus: Contact[]
  selectedContact: Contact

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  this.contactService
    .getContacts()
    .then((herokus: Contact[]) => {
      this.herokus = herokus.map((contact) => {
        if (!contact.phone) {
          contact.phone = {
            mobile: '',
            work: ''
          }
        }
        return contact;
      });
    });
}

 private getIndexOfContact = (contactId: String) => {
  return this.herokus.findIndex((contact) => {
    return contact._id === contactId;
  });
}


selectContact(contact: Contact) {
  this.selectedContact = contact
}

createNewContact() {
  var contact: Contact = {
    name: '',
    email: '',
    phone: {
      work: '',
      mobile: ''
    }
  };

  // By default, a newly-created contact will have the selected state.
  this.selectContact(contact);
}

deleteContact = (contactId: String) => {
  var idx = this.getIndexOfContact(contactId);
  if (idx !== -1) {
    this.herokus.splice(idx, 1);
    this.selectContact(null);
  }
  return this.herokus;
}

addContact = (contact: Contact) => {
  this.herokus.push(contact);
  this.selectContact(contact);
  return this.herokus;
}

updateContact = (contact: Contact) => {
  var idx = this.getIndexOfContact(contact._id);
  if (idx !== -1) {
    this.herokus[idx] = contact;
    this.selectContact(contact);
  }
  return this.herokus;
}
}

