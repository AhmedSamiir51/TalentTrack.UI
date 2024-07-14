import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvService } from './env/env.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  private apiUrl = this.env.APIUrl;
  constructor(private http: HttpClient, private env: EnvService) { }

  getAllWithSearch(search: any, page: number, pageSize: number): Observable<any> {
    let params = {
      ...search,
      PageSize: pageSize,
      CurrentPage: page
    };

    return this.http.post<any>(`${this.apiUrl}Application/GetAllApplicationWithSearch`, params);
  }

  getById<T>(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}Application/GetApplicationById/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}Application/GetAllApplication`);
  }

  create<T>(data: T ): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}Application/AddOrEditApplication`, { ApplicantDto: data });
  }

  delete<T>(id: number): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}Application/DeleteApplication`, { id });
  }
}
