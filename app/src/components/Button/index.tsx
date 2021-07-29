import React from 'react'

interface Props {
    value: string
    onClick: () => void
}

const Button: React.FC<Props> = ({value, onClick}) => {
    return (
        <button onClick={onClick}>
            {value}
        </button>
    )
}

export default Button
