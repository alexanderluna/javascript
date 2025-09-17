import type { PropsWithChildren } from "react"

type ButtonProps = {
    className?: string,
    onClick: any,
}

function CalculatorButton({ children, className, onClick }: PropsWithChildren<ButtonProps>) {
    return (
        <button className={`
            ${className || 'bg-gray-300'} 
            text-gray-100
            px-4 w-full aspect-square rounded-full 
            shadow-gray-500 shadow-md text-4xl
            hover:opacity-80 hover:cursor-pointer
            active:opacity-60 active:shadow-none
            ${className}
        `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default CalculatorButton