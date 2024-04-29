import { Fragment } from "react"

import { makeKey } from "../../utils/makeKey";

import './styles.css'

type Convertation = {
    from: string;
    to: string;
    first_val: string | number;
    second_val: string | number;
    date: any;
};

type Props = {
    history: Array<Convertation>;
};

export const Convertation: React.FC<Props> = ({ history }) => {
    const result: Array<JSX.Element> = []

    setTimeout(() => 1, 1000)

    history.forEach((action) => {
        result.push(
            <tr key={ makeKey(action) } className="wrapper">
                <td className="first__valute">{ action.from }</td>
                <td className="second__valute">{ action.to }</td>
                <td className="first__valute__amount">{ action.first_val }</td>
                <td className="second__valute__amount">{ action.second_val }</td>
                <td className="convert__date">{ action.date }</td>
            </tr>
        )
    });

    return (
        <Fragment>
            <table cellSpacing="0" cellPadding="8">
                <tr key={ Math.random() } className="wrapper">
                    <td>Исходная валюта</td>
                    <td>Целевая валюта</td>
                    <td>Сумма в исходной валюте</td>
                    <td>Сумма в целевой валюте</td>
                    <td>Дата конвертации</td>
                </tr>
                { result.reverse() }
            </table>
        </Fragment>);
};