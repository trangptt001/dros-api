import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { ObjectSchema } from 'joi';
import { ErrorResponse } from '../class/error-response';

@Injectable()
export class ValidationPipe implements PipeTransform {

  constructor(private schema: ObjectSchema){}
  transform(value: any, metadata: ArgumentMetadata) {
    const {error} = this.schema.validate(value);
    if(error){
      const message = error.details.map(i => i.message).join(',');
      throw new BadRequestException(new ErrorResponse(400, message, "MSE001"))
    }
    return value;
  }
}
