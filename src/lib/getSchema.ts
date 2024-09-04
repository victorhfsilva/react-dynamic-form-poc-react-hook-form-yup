
import * as Yup from "yup";
import { InputProps } from "../types";

type YupBoolean = Yup.BooleanSchema<boolean | undefined, Yup.AnyObject, boolean | undefined>
type YupString = Yup.StringSchema<string | undefined, Yup.AnyObject, string | undefined>
type YupNumber = Yup.NumberSchema<number | undefined, Yup.AnyObject, number | undefined>

const getSchema = (field: InputProps) => {

    let schema: YupBoolean | YupString | YupNumber;

    switch (field.typeValue) {
        case 'boolean':
            schema = Yup.boolean();
            break;
        case 'number':
            schema = Yup.number();
            break;
        case 'string':
        default:
            schema = Yup.string();
            break;
    }

    for (const rule of field.validations) {
        switch (rule.type) {
            case 'isTrue':
                schema = (schema as YupBoolean).oneOf([true], rule.message);
                break;
            case 'required':
                schema = schema.required(rule.message);
                break;
            case 'minLength':
                schema = (schema as YupString).min(rule.value as number, rule.message);
                break;
            case 'maxLength':
                schema = (schema as YupString).max(rule.value as number, rule.message);
                break;
            case 'isEmail':
                schema = (schema as YupString).email(rule.message);
                break;
            case 'oneOf':
                schema = (schema as YupString).oneOf(rule.ref ? [Yup.ref(rule.ref)] : [], rule.message);
                break;
        }
    }

    return schema;
}

export default getSchema;
