import {
    card,
    cardTitle,
    cardValue,
    cardTotal,
} from './styles.module.css';

const Card = ({
    title,
    value,
    icon,
    isCardTotal
}) => {
    return (
        <>
            <div className={isCardTotal ? cardTotal : card}>
                <h3 className={cardTitle}>
                    <span>{ title }</span>

                    {icon && (
                       <img src={'/assets/'+icon.name+'.svg'} alt={icon.alt} /> 
                    )}
                </h3>

                <p className={cardValue}>{ value }</p>
            </div>
        </>
    );
}

export default Card;