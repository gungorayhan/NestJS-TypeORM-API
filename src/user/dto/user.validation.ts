// import { ValidateByOptions, registerDecorator, ValidationArguments } from 'class-validator';


// export function IsAdult(ValidationOptions?: ValidateByOptions) {
//     // eslint-disapled-next-line @typescript-eslint/ban-types
//     return function (object:Object, propertyName:string) {
//         registerDecorator({
//             name: 'isAdult',
//             target: Object.constructor,
//             propertyName: propertyName,
//             options: ValidationOptions,
//             validator: {
//                 validate(value:any, args:ValidationArguments){
//                     const today=Date();
//                     const birthday=new Date(value);
//                     const age = today.getFullYear() - birthday.getFullYear();
//                     if(age <18){
//                         return false;
//                     }else{
//                         return true;
//                     }
//                 }
//             }
//         })
//     }
// }