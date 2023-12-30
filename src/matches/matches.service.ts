import { Injectable } from '@nestjs/common';
import { Calendar } from './scraping/Calendar';

@Injectable()
export class MatchesService {
  constructor(private readonly calendar: Calendar){}

  async getMatches(skip: number, limit: number) {
    this.calendar.filterMatches()
    return "AAAA"
  }
}

