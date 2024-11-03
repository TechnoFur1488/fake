import { useState } from "react"
import s from "./Input.module.css"

const Input = () => {
    const [inputMoney, setInputMoney] = useState("")
    const [result, setResult] = useState(0)

    const time = new Date().toLocaleString('en-GB', { day: "2-digit", month: "2-digit", year: "numeric", hour: '2-digit', minute: '2-digit' })

    const replaceTime = time.replace(new RegExp("/", "g"), ".")

    const randomMath = Math.random() * 1200

    return (
        <>
            <div className={s.container}>
                <input className={s.input} type="text" value={inputMoney} onChange={e => setInputMoney(e.target.value)} />
                <button className={s.btnInput} onClick={() => setResult(inputMoney)} >Создать число чека</button>
            </div>
            <div className={s.containerRemove}>
                <img src="/images/asd.svg" alt="" />
                <img className={s.troleb} src="/images/Group 37.svg" alt="" />
                <img src="/images/ios_share_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
            </div>
            <h1 className={s.name}>CITY CARD SYSTEM, LUTSK</h1>
            <div className={s.containerMoneuStyle}>
                <div className={s.moneyStyle}>
                    <span className={s.resultMoney}>-{result} UAH</span>
                    <span className={s.timeStyle}>{replaceTime}</span>
                </div>
            </div>
            <div className={s.containerCard}>
                <div className={s.flexContainerCard}>
                    <div className={s.cardState}>
                        <span className={s.status}>Статус</span>
                        <span>Успішно</span>
                    </div>
                    <div className={s.rightCard}>
                        <span className={s.rightCardText}>3 картки</span>
                        <img src="/images/right.svg" alt="" />
                    </div>
                    <div className={s.containerNumber}>
                        <img className={s.masterCard} src="/images/mc_symbol.svg" alt="" />
                        <span>5168 •••• •••• 4923</span>
                    </div>
                    <span>Картка Юніора</span>
                </div>
            </div>
            <div className={s.randomContainer}>
                <div className={s.randomContainerFlex}>
                    <span className={s.randomText}>Залишок</span>
                    <div>
                        <span>{randomMath.toFixed(2)} UAH</span>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            <div className={s.kategoriContainer}>
                <div className={s.kategoryFlex}>
                    <span className={s.kategoryText}>Категорія</span>
                    <span>Транспорт</span>
                </div>
            </div>
            <div className={s.helpContainer}>
                <div className={s.helpContainerFlex}>
                    <img className={s.helpSvg} src="/images/Group 35.svg" alt="" />
                    <span>Допомога Онлайн</span>
                </div>
            </div>
        </>
    )
}

export default Input