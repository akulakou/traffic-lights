import { Module } from '@nestjs/common';
import { ChainModule } from './modules/chain/chain.module';

@Module({
    imports: [ChainModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
