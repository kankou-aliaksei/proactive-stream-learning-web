import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

export class BaseService<T> {

  constructor(private http: HttpClient, private path: string) { }

  async create(entity: T): Promise<T> {
    return this.http.post<T>(environment.baseApiUri + this.path, entity).toPromise();
  }

  async findById(id: string): Promise<T> {
    return this.http.get<T>(environment.baseApiUri + this.path + `/${id}`).toPromise();
  }
}
