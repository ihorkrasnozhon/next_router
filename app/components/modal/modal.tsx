import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import "./modal.css";

const Modal = ({
                   showImmidiatly=false ,
                   onClose=()=> {},
                   children='content',
                   title='title',
                   delay = 3000,
                   className=""
}) => {
    const [isOpen, setIsOpen] = useState(showImmidiatly);
    const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
        setIsMounted(true);
        if (!showImmidiatly) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [delay, showImmidiatly]);

    const handleCloseClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(false);
        onClose();
    };

    if (!isMounted || !isOpen) return null;

    const modalContent = (
        <div className="modal-overlay">
            <div className="modal-wrapper">
                <div className={`modal ${className}`}>
                    <div className="modal-header">
                        <a href="#" onClick={handleCloseClick}>
                            x
                        </a>
                    </div>
                    {title && <h1>{title}</h1>}
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        </div>
    );

    const modalRoot = document.getElementById("modal-root");

    if (!modalRoot) {
        return null;
    }

    return ReactDOM.createPortal(
        modalContent,
        modalRoot
    );
};

export default Modal
