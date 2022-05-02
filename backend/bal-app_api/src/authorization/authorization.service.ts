import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Parcours } from 'src/Entity/parcours.entity';
import { TokenJson } from './authorization.dbo';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Injectable()
export class AuthorizationService {
  constructor(private httpService: HttpService) {}
  async getToken(): Promise<any> {
    const headersRequest = {
      'Content-Type': 'application/json'
    };
    const body = {
      "client_id":"Mn4bNFTxfhbZkHLFvUX0j5AVbOuAlNqG",
      "client_secret":"fSoatfUS4fxkANV8Jt-LDtG8e0tAO01eQPkXraKKURHIMZhVCDj5MuUPw8AE9_Ff",
      "audience":"bal-app_api",
      "grant_type":"client_credentials"
    };
    const response = this.httpService.post('https://dev-2hywfoly.us.auth0.com/oauth/token', body, { headers: headersRequest }).pipe(
      map(response => response.data)
    )
    return response;
  }
}