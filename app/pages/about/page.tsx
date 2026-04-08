"use client";
import CardContainer from "../../components/card/CardContainer";
import {useRef, useState} from "react";

interface CardItem {
    name: string;
    id: number;
}

type DayState = Record<string, CardItem[]>;

const myArray: CardItem[] = [...Array(4)].map((_, i) => {
    return {
        name: `Card - ${i}`, id: i
    }
});

const days = [
    { id: 'monday', label: 'Monday', color: 'text-red-600' },
    { id: 'tuesday', label: 'Tuesday', color: 'text-orange-600' },
    { id: 'wednesday', label: 'Wednesday', color: 'text-yellow-600' },
    { id: 'thursday', label: 'Thursday', color: 'text-green-600' },
    { id: 'friday', label: 'Friday', color: 'text-green-600' },
    { id: 'saturday', label: 'Saturday', color: 'text-blue-600' },
    { id: 'sunday', label: 'Sunday', color: 'text-purple-600' },
];

export default function About() {
    const [columns, setColumn] = useState<DayState>({
        cards: myArray,
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: []
    });
    const dragCardId = useRef<number | null>(null);
    const mainRef = useRef<HTMLDivElement>(null!);

    const moveCard = (target: string) => {
        const id = dragCardId.current;
        if (id === null) return;

        setColumn(prevState => {
            let foundCard: CardItem | undefined;

            for (const col in prevState) {
                const item = prevState[col].find(i => i.id === id);
                if (item) {
                    foundCard = item;
                    break;
                }
            }

            if (!foundCard) return prevState;
            const newCol: DayState = {};

            for (const col in prevState) {
                newCol[col] = prevState[col].filter(i => i.id !== id);
            }
            newCol[target] = [...newCol[target], foundCard];
            return newCol;
        });

        dragCardId.current = null;
    }

    return (
        <main id='main' ref={mainRef}>
            <div className="flex flex-col gap-1 justify-center">
                <div className="flex justify-center">
                    {days.map(day => (
                        <div
                             key={day.id}
                             data-swapy-slot={day.id}
                             className="flex flex-col"
                             onDragOver={(e) => e.preventDefault()}
                             onDrop={() => moveCard(day.id)}>
                            <h2 className={`text-center font-bold ${day.color}`}>{day.label}</h2>
                            <CardContainer data={columns[day.id]} dragCard={dragCardId}/>
                        </div>
                    ))}


                </div>

                <div
                    className="flex flex-col"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => moveCard('cards')}
                    data-swapy-slot={'cards'}
                >
                    <h2 className="text-center font-bold text-blue-600">Cards</h2>
                    <CardContainer data={columns.cards} dragCard={dragCardId}/>
                </div>
            </div>
        </main>
    );
}
