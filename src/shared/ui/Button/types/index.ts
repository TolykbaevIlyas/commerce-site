export interface IButton {
    children?: React.ReactNode;
    type?: 'submit' | 'button' | 'reset' | undefined;
    className?: string;
    onClick?: ()=> void;
    variant: "1" | "2" | "3"| "4" | "5" | "6";
}