/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Socket } from "socket.io";
import { MessagesDbo } from "./messages.dbo";

@Injectable()
export class MessagesService {

  messages: MessagesDbo[] = [{name: 'User1', message: 'Hey'}]
  clientToUser = {}
  
  public create(messageDbo: MessagesDbo) {
    const message = { ...messageDbo }
    this.messages.push(message) // TODO improve

    return message;
  }

  getClientName(clientId: string) {
    return this.clientToUser[clientId];
  }

  public findAll() {
    return this.messages;
  }

  public identify(name: string, clientId: string) {
        this.clientToUser[clientId] = name;

        return Object.values(this.clientToUser)
  }
}