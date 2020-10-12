import { Injectable } from '@angular/core';
import { BaseService } from "../base.service";
import { ContactModel } from "./contact.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService extends BaseService<ContactModel>{

  constructor(http: HttpClient) {
    super(http, '/contacts');
  }

  async create(contact: ContactModel): Promise<ContactModel> {
    return super.create(contact);
  }
}
