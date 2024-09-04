import { InputProps } from "../../types";
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import getSchema from "../../lib/getSchema";
import './styles.css'

const DynamicForm = ({ fields: interfaceFields }: { fields: InputProps[] }) => {

    const validationSchema = Yup.object().shape(
        interfaceFields.reduce((acc, interfaceField) => {
            acc[interfaceField.name] = getSchema(interfaceField);
            return acc;
        }, {} as Record<string, any>)
    );

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: any) => {
        console.log('Form Data:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {interfaceFields.map((interfaceField) => (
                <div key={interfaceField.name}>
                    <label>{interfaceField.label}</label>

                    {interfaceField.type === 'select' ? (
                        <Controller
                            name={interfaceField.name}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <select value={value} onChange={onChange}>
                                    {interfaceField.options?.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.desc}
                                        </option>
                                    ))}
                                </select>
                            )}
                        />
                    ) : interfaceField.type === 'radio' ? (
                        interfaceField.options?.map(option => (
                            <div key={option.value}>
                                <label>
                                    <Controller
                                        name={interfaceField.name}
                                        control={control}
                                        render={({ field: { onChange, value } }) => (
                                            <input
                                                type="radio"
                                                value={option.value}
                                                checked={value === option.value}
                                                onChange={onChange}
                                            />
                                        )}
                                    />
                                    {option.desc}
                                </label>
                            </div>
                        ))
                    ) : (
                        <Controller
                            name={interfaceField.name}
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type={interfaceField.type}
                                    placeholder={interfaceField.placeholder}
                                />
                            )}
                        />
                    )}

                    {errors[interfaceField.name] && <p>{(errors[interfaceField.name]?.message as string) || ''}</p>}
                </div>
            ))}

            <button type="submit">Submit</button>
        </form>
    );
};

export default DynamicForm;