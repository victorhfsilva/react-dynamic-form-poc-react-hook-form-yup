export interface InputProps {
    type: 'text' | 'radio' | 'email' | 'password' | 'select' | 'checkbox'
    name: string
    value: string | number | boolean
    placeholder?: string
    label?: string

    typeValue: 'boolean' | 'number' | 'string'
    validations: Validation[]
    options?: Opt[]
}

export interface Opt {
    value: string | number
    desc: string
}

export interface Validation {
    type: 'required' | 'isEmail' | 'minLength' | 'maxLength' | 'isTrue' | 'oneOf'
    value?: number
    message: string
    ref?: string
}