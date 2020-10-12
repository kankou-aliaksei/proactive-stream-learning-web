import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { IgxToastComponent } from "igniteui-angular";
import { ContactService } from "../../services/contacts/contact.service";
import { ContactModel } from "../../services/contacts/contact.model";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @ViewChild('toast')
  public toast: IgxToastComponent;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  public async onSubmit(form: NgForm) {
    this.toast.show();

    const contact = new ContactModel();
    contact.name = form.value.name;
    contact.phone = form.value.phone;
    contact.email = form.value.email;
    contact.message = form.value.message;

    form.reset();

    await this.contactService.create(contact);
  }

}
