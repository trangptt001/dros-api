import { ValidationError } from '@nestjs/common';
import { ValidatorOptions } from 'class-validator';

export interface ValidationPipeOptions extends ValidatorOptions {
  transform?: boolean;
  disabledErrorMessage?: boolean;
  exceptionFactory?: (error: ValidationError[]) => any;
}
