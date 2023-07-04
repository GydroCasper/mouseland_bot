interface FoodEventProps {
    name: string
}

export const FoodEvent: React.FC<FoodEventProps> = ({name}) => {
    return (<div>{name}</div>)
}