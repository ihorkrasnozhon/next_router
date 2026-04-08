"use client";
import Card from './Card';
import {motion} from "framer-motion";

interface ContainerProps {
    data: any[];
    dragCard: any;
}

const CardContainer = ({data=[], dragCard}: ContainerProps) => {

    return (
        <div className='flex justify-center items-center flex-col gap-2 p-2 ml-2 mr-2 min-h-[100px] border border-gray-300'>
            {data.map((c: any, i: number) => (
                <motion.div layout key={c.id}>
                <Card
                    key={c.id}
                    id={c.id}
                    index={i}
                    dragCard={dragCard}
                    name={c.name}
                />
                </motion.div>
            ))}

        </div>
    )
}

export default CardContainer;
