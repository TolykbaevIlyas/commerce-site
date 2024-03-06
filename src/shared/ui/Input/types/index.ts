export interface IInput{
    type?: string;
    placeholder?: string;
    value?: string;
    className?: string;
    onChange?: (value: string) => void | undefined;
}