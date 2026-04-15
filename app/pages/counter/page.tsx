"use client";
import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import { Group, Button, Text } from '@mantine/core';

const useStore = create(
    persist(
        (set) => ({
            count: 0,
            increment: () => set((state) => ({count: state.count + 1})),
            decrement: () => set((state) => ({count: state.count - 1})),
            reset: () => set({count: 0}),
        }),
        {
            name: 'counter-storage',
        }
    )
)

function Counter() {
    const count = useStore((state) => state.count)
    const increment = useStore((state) => state.increment)
    const decrement = useStore((state) => state.decrement)
    const reset = useStore((state) => state.reset)

    return (
        <Group style={{gap: 10+'px'}}>
            <Text>Count: {count}</Text>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
            <Button onClick={reset}>Reset</Button>
        </Group>
    )
}

export default Counter;
