import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  console.log("Entro al guard");

  if (authService.usuario !== null) {
    // Deja pasar
    return true;
  } else {
    // No deja pasar
    return false;
  }

  return authService.usuario !== null;
};
