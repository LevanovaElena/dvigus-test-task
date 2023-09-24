import React, {useEffect, useLayoutEffect, useRef} from "react";
import {Button} from "../button/button.component";
import {ResultsItem} from "../results-item/results-item.component";
import City from "../../assets/images/city.jpg";
import IconInfo from "../../assets/images/icons/information-circle-contained.svg";
import {Estimation} from "../estimation/estimation.component";
import {mockEstimations} from "../../mocks/estimations.mock";


type ResultsProps = {
    results?: string;
}
export const Results = ({results,}: ResultsProps): React.JSX.Element => {
    useEffect(() => {
        // @ts-ignore
        if(window.getData) {
            // @ts-ignore
            getData('district', 'realty_complex', 'flat');
        }
    }, []);
    return (
        <section className="results">
            <div className="results__header">
                <h3>Результаты оценки</h3>
                <p>Отчёт о квартире по адресу: Москва, НАО (Новомосковский), Коммунарка поселок, Бунинские Луга жилой комплекс, 3.4.1</p>
                <p>Квартира опубликована на следующих площадках: cian, domclick</p>
            </div>
            <div className="results__left">
                <ResultsItem caption='Оценка от сервиса' result='8 млн ₽'
                             text='Cтоимость, определенная на основе долгосрочных данных и консультаций с экспертами рынка недвижимости'/>
                <ResultsItem caption='Рыночный диапазон цены' result='7,5-8,5 млн ₽'
                             text='Оценочные границы стоимости объекта на рынке недвижимости, основанные на анализе данных и консультациях с экспертами'/>
                <ResultsItem caption='Цена на сайтах (cian, domclick)' result='8,9 млн ₽'
                             text='Стоимость квартиры, указанная в объявлениях на различных онлайн-ресурсах' type={'warning'}/>
                <img src={City} alt='City' className='results__left__image'/>

            </div>
            <div className="results__right"  >
                <Estimation result={3} caption={'Оценка инфраструктуры и района'} text={mockEstimations.district} name={'district'}/>
                <Estimation result={4} caption={'Оценка жилого комплекса'} text={mockEstimations.realty_complex}  className={'my-21'} name={'realty_complex'}/>
                <Estimation result={3} caption={'Оценка квартиры'} text={mockEstimations.flate} name={'flat'} />
                <div className='information'>
                    <img src={IconInfo} alt={'Information'}/>
                    <p>Для того чтобы понять, какие параметры влияют на стоимость квартиры, нажмите на кнопку “Подробный отчет”.</p>
                </div>
                <Button caption={'Подробный отчет'} size={'lg'} />
            </div>
{/*            <Helmet>
                <script src={"getData.js"}/>
            </Helmet>*/}
        </section>
    );
}
