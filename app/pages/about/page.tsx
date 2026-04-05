"use client";
import CardContainer from "../../components/card/CardContainer";
import {useRef, useState} from "react";

interface CardItem {
    name: string;
    id: number;
}

export default function About() {
    const myArray: CardItem[] = [...Array(4)].map((_, i) => {
        return {
            name: `Card - ${i}`, id: i
        }
    });

    const [cards, setCards] = useState<CardItem[]>(myArray);
    const [col1, setInCol1] = useState<CardItem[]>([]);
    const [col2, setInCol2] = useState<CardItem[]>([]);
    const dragCardId = useRef<number | null>(null);

    console.log(myArray);

    const moveCard = (target: 'cards' | 'col1' | 'col2') => {
        const id = dragCardId.current;
        if (id === null) return;

        const allItems = [...cards, ...col1, ...col2];
        const card = allItems.find(item => item.id === id);
        if (!card) return;

        const remove = (list: any[]) => list.filter(item => item.id !== id);

        if (target === 'cards') {
            if (cards.some(i => i.id === id)) return;
            setCards([...cards, card]);
            setInCol1(remove(col1));
            setInCol2(remove(col2));
        } else if (target === 'col1') {
            if (col1.some(i => i.id === id)) return;
            setInCol1([...col1, card]);
            setCards(remove(cards));
            setInCol2(remove(col2));
        } else {
            if (col2.some(i => i.id === id)) return;
            setInCol2([...col2, card]);
            setCards(remove(cards));
            setInCol1(remove(col1));
        }
        dragCardId.current = null;
    }

    return (
        <main>
            <div className="flex flex-col gap-1 justify-center">

                <div
                    className="flex flex-col"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => moveCard('cards')}
                >
                    <h2 className="text-center font-bold text-blue-600">Cards</h2>
                    <CardContainer data={cards} dragCard={dragCardId} />
                </div>

                <div className="flex flex-col"
                     onDragOver={(e) => e.preventDefault()}
                     onDrop={() => moveCard('col1')}>
                    <h2 className="text-center font-bold text-orange-600">Column 1</h2>
                    <CardContainer data={col1} dragCard={dragCardId}/>
                </div>

                <div className="flex flex-col"
                     onDragOver={(e) => e.preventDefault()}
                     onDrop={() => moveCard('col2')}>
                    <h2 className="text-center font-bold text-green-600">Column 2</h2>
                    <CardContainer data={col2} dragCard={dragCardId}/>
                </div>

            </div>
        </main>
    );
}
