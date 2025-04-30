import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario : string | null = "null";

  constructor() { }
}
