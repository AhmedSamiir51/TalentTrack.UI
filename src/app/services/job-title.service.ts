import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvService } from './env/env.service';

@Injectable({
  providedIn: 'root'
})
export class JobTitleService {

  private apiUrl = this.env.APIUrl;
  constructor(private http: HttpClient, private env: EnvService) { }

  getAllWithSearch(search: any, page: number, pageSize: number): Observable<any> {
    let params = {
      ...search,
      PageSize: pageSize,
      CurrentPage: page
    };

    return this.http.post<any>(`${this.apiUrl}JobTitle/GetAllJobTitleWithSearch`, params);
  }

  getById<T>(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}JobTitle/GetJobTitleById/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}JobTitle/GetAllJobTitle`);
  }

  create<T>(data: T ): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}JobTitle/AddOrEditJobTitle`, { JobTitlesDto: data });
  }

  delete<T>(id: number): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}JobTitle/DeleteJobTitle`, { id });
  }
}
