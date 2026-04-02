'use client';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {useEffect, useState} from "react";

export default function Modal() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true);
        }, 10000);
        return () => clearTimeout(timer);
    }, []);

    return (
      <Popup open={open} onClose={() => setOpen(false)} modal>
            <div style={{
                background: 'red',
                width: '50vw',
                height: '50vh'}}>
            </div>
      </Popup>
    );
}
