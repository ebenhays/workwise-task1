import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";

export enum EmploymentType {
    PERMANENT_EMPLOYMENT = "permanent employment",
    TRAINEE = "Trainee",
    MANDATORY_INTENSHIP = "mandatory intenship",
    VOLUNTARY_INTENSHIP = "poluntary intenship",
    WORKING_STUDENT = "working student",
    THESIS = "thesis",
    PROJECT_WORK = "project work",
    TEMP = "temp",
    VOLUNTARY_TRAINING = "poluntary training",
    DUAL_STUDY = "dual study"
}

export enum JobLocation {
    KARLSRUHE = "karlsruhe",
    FREIBUG = "freibug",
    BERLIN = "berlin",

}

export class CandidatesDto {
    @IsNotEmpty()
    @ApiProperty()
    fullName: string
    @IsNotEmpty()
    @IsEnum(EmploymentType)
    @ApiProperty()
    employmentType: EmploymentType
    @ApiProperty({ required: false })
    lastEmploymentRole?: string
    @ApiProperty({ required: false })
    lastEmploymentDate?: string
    @ApiProperty({ required: false })
    lastRole?: string
    @IsNotEmpty()
    @ApiProperty()
    currentRole: string
    @ApiProperty({ required: false })
    currentCompany?: string
    @IsNotEmpty()
    @IsEnum(JobLocation)
    @ApiProperty()
    jobLocation: JobLocation
}

export class IFilter {
    location?: JobLocation
    emptype?: EmploymentType
}


