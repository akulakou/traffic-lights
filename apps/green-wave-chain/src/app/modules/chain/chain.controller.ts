import {
    Body,
    Controller,
    Post,
    UsePipes,
} from '@nestjs/common';
import { JoiValidationPipe } from 'apps/green-wave-chain/src/pipes/JoiValidation.pipe';
import { ChainService } from './chain.service';
import { CalculateChainDto } from './dto/CalculateChain.dto';
import { ChainSchema } from './schemas/ChainSchema';

@Controller()
export class ChainController {
    constructor(private readonly chainService: ChainService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(ChainSchema))
    calculate(@Body() data: CalculateChainDto) {
        return this.chainService.calculate(data);
    }
}
