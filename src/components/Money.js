import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../App.css'

const Money = () => {

    const money = useSelector(state => state.spendMoney.money)
    const totalReceipt = useSelector(state => state.spendMoney.totalReceipt)

    let scroll = 0


    // useEffect(() => {
    //     window.onscroll = () => {

    //         if (scroll >= window.scrollY && window.scrollY > 10) {
    //             document.getElementById('money').classList.add('fix')
    //         } else {
    //             document.getElementById('money').classList.remove('fix')
    //         }

    //         scroll = window.scrollY
    //     }
    // }, [])


    return (
        <>

            < div id="money" className="container" style={{ height: 90, background: '#53D8B9', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: '' }
            }>
                <p style={{ fontSize: 35, fontWeight: 'bold', }}> $ {(money - totalReceipt).toLocaleString()}</p>
            </div >
        </>

    )
}

export default Money
