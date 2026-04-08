const Card = ({ id, dragCard, name }: any) => {

    const handleDragStart = (e) => {
        dragCard.current = id;
        e.currentTarget.style.opacity = '0';
    }

    const handleDragEnd = (e) => {
        e.currentTarget.style.opacity = '1';
    }

    return (
        <div
            data-swapy-item={id}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragOver={(e) => e.preventDefault()}
            className="active:opacity-n0 display-inline w-64 p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md cursor-grab active:cursor-grabbing select-none"
        >
            <div className="w-10 h-10 mb-4 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold">
                {id}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        </div>
    );
};

export default Card;
