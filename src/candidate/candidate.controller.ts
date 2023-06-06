import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CandidateService } from './candidate.service';
import { IFilter } from './dto';

@ApiTags('Candidates')
@Controller('candidates')
export class CandidateController {
    constructor(private candidateService: CandidateService) { }
    @Get()
    getCandidates() {
        return this.candidateService.getCandidates()
    }

    @Get("search")
    searchCandidates(@Query() search: IFilter) {
        return this.candidateService.searchCandidates(search)
    }
}
