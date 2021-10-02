import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HandlerService {
  static handler(erro: HttpErrorResponse) {
    let errorMessage: string;
    if (erro.error instanceof ErrorEvent) {
      errorMessage = erro.error.message;
    } else {
      errorMessage = `Erro - ${erro.status} ao acessar a URL ${erro.url} /n mensagem: ${erro.message}`;
    }
    return throwError(errorMessage);
  }

  constructor() {}
}
