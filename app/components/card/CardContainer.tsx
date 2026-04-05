"use client";
import Card from './Card';

const CardContainer = ({data, dragCard}: any) => {
    return (
        <div className='flex justify-center items-center flex-row gap-2 p-2 ml-2 mr-2 min-h-[100px] border border-gray-300'>
            {data.map((c: any, i: number) => (
                <Card
                    key={c.id}
                    id={c.id}
                    index={i}
                    dragCard={dragCard}
                    name={c.name}
                />
            ))}
        </div>
    )
}

export default CardContainer;
