import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementProduct, decrementProduct } from '../redux/spend/spendMoneySlice'

const Products = () => {
    const products = useSelector(state => state.spendMoney.products)
    const money = useSelector(state => state.spendMoney.money)
    const totalReceipt = useSelector(state => state.spendMoney.totalReceipt)
    const dispatch = useDispatch()

    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {products.map((value, index) => (
                <div style={{ width: '29%', marginLeft: '2%', marginRight: '2%', height: 400, background: 'white', marginTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>

                    <img src={value.url} style={{ width: '70%', height: 200, marginTop: 40 }} />

                    <h2 style={{ marginTop: 20 }}>{value.title}</h2>
                    <p style={{ color: '#53D8B9', marginTop: 8, fontSize: 20 }}>$ {value.price.toLocaleString()}</p>

                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', marginTop: 20 }}>
                        <button
                            disabled={value.amount === 0 ? true : false}
                            onClick={() => dispatch(decrementProduct(value.id))}
                            style={{ width: '30%', marginLeft: '2%', height: 40, border: 'none', cursor: 'pointer', }}>
                            Sell
                        </button>

                        <input min={0} value={value.amount} style={{
                            width: '30%', marginLeft: '3%', borderStyle: 'groove', textAlign: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column'
                        }} />


                        <button
                            onClick={() => dispatch(incrementProduct(value.id))}
                            disabled={money - totalReceipt < value.price ? true : false}
                            style={{ width: '30%', marginLeft: '3%', marginRight: '2%', background: '#53D8B9', border: 'none', color: 'white', cursor: 'pointer' }}>
                            Buy
                        </button>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products
