import {
    Test,
    TestingModule,
} from '@nestjs/testing';

import { ChainController } from '../chain.controller';
import { ChainService } from '../chain.service';
import { ChainModule } from '../chain.module';
import { mockChainService } from './__mocks__/chain.service.mock';
import { CalculateChainDto } from '../dto/CalculateChain.dto';

describe('ChainController', () => {
    let chainController: ChainController;
    let module: TestingModule;

    beforeAll(async () => {
        module = await Test.createTestingModule({
            imports: [ChainModule],
        })
            .overrideProvider(ChainService)
            .useValue(mockChainService)
            .compile();
    });

    beforeEach(async () => {
        chainController = module.get<ChainController>(ChainController);
    });

    it('should be defined', async () => {
        expect(chainController).toBeDefined();
    });

    describe('calculate', () => {
        it('should call chainService.calculate()', () => {

            const result = chainController.calculate({} as CalculateChainDto);

            expect(mockChainService.calculate).toBeCalledWith({});
        });
    });
});
