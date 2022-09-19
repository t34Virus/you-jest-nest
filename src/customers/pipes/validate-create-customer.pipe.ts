import { ArgumentMetadata, Injectable, PipeTransform,   HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class ValidateCreateCustomerPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('Inside ValidateCreateCustomerPipe!');
    console.log(value)!
    console.log(metadata);

    const parseIdToInt = parseInt(value.id.toString());
    if (isNaN(parseIdToInt)) {
      console.log(`${value.age} is not a number!`);
      throw new HttpException(
        'Invalid Data Type for property age. Expected Number',
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log(`${parseIdToInt} is a number. Returning...`);
    return { ...value, age: parseIdToInt };
  }
}
