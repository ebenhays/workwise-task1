import { Injectable, NotFoundException } from '@nestjs/common';
import { IFilter } from './dto';
import candidate from "./data/candidate.json"

@Injectable()
export class CandidateService {
    private candidate = candidate

    getCandidates() {
        return this.candidate
    }

    searchCandidates(data: IFilter) {
        if (!data.emptype && !data.location) return this.candidate

        const candidateSearch = this.candidate.filter(rec => (rec.jobLocation === data.location) || (rec.employmentType === data.emptype))
        if (!candidateSearch) throw new NotFoundException('Search returned no result')
        return candidateSearch



    }

}
