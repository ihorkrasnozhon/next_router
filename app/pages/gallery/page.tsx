import Image from 'next/image'

export default function Gallery() {
    return (
        <div>
            <h1>Gallery:</h1>

            <div className="flex flex-wrap">
                <Image
                    src="/img1.jpg"
                    width={300}
                    height={300}
                    alt="1"
                    className="w-full md:w-[calc(25%)] h-auto object-cover"
                />
                <Image
                    src="/img2.jpg"
                    width={300}
                    height={300}
                    alt="2"
                    className="w-full md:w-[calc(25%)] h-auto object-cover"
                />
                <Image
                    src="/img3.jpg"
                    width={300}
                    height={300}
                    alt="3"
                    className="w-full md:w-[calc(25%)] h-auto object-cover"
                />
                <Image
                    src="/img4.jpg"
                    width={300}
                    height={300}
                    alt="4"
                    className="w-full md:w-[calc(25%)] h-auto object-cover"
                />
            </div>
        </div>
    );
}
