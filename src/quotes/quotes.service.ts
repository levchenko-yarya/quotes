import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { Quote } from './entities/quote.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuotesService {
  constructor(
    @InjectRepository(Quote)
    private quotesRepository: Repository<Quote>,
  ) {}

  create(createQuoteDto: CreateQuoteDto): Quote {
    return this.quotesRepository.create(createQuoteDto);
  }

  findAll(): Promise<Quote[]> {
    return this.quotesRepository.find();
  }

  findOne(id: string): Promise<Quote> {
    // @ts-ignore
    return this.quotesRepository.findOne(id);
  }

  update(id: number, updateQuoteDto: UpdateQuoteDto) {
    return `This action updates a #${id} quote`;
  }

  async remove(id: string): Promise<void> {
    await this.quotesRepository.delete(id);
  }
}
