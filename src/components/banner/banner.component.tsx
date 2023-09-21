import React from "react";

type BannerProps = {
    caption?: string;
    text?: string;
    children?: React.JSX.Element;
}
export const Banner = ({caption, text, children}: BannerProps): React.JSX.Element => {
    return (
        <section className='banner'>
            <h1 className='banner__caption'>{caption || 'Оценка инвестиционной привлекательности квартиры'}</h1>
            <p className='banner__text'>{text || 'Анализ инвестиционной привлекательности квартиры на основе её параметров, также параметров жилого комплекса и инфраструктуры'}</p>
            {children ? (
                <div className='banner__option'>
                    {children}
                </div>
            ) : null}
        </section>
    );
}
