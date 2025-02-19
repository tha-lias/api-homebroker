/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param,  } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { CreateAssetDto } from './dto/create-asset.dto';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Post()
  create(@Body() createAssetDto: CreateAssetDto) {
    return this.assetsService.create(createAssetDto);
  }

  @Get()
  findAll() {
    return this.assetsService.findAll();
  }

  @Get(':symbol')
  findOne(@Param('id') symbol: string) {
    return this.assetsService.findOne(symbol);
  }
}
