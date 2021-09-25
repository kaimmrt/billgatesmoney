import React, { useEffect } from 'react'
import { useSelector } from "react-redux";

const Receipt = () => {

    const products = useSelector(state => state.spendMoney.products)
    const totalReceipt = useSelector(state => state.spendMoney.totalReceipt)

    return (
        <div style={{ marginTop: 50, background: 'white', width: '96%', marginLeft: '2%', minHeight: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 50 }}>
            <h1 style={{ marginBottom: 20 }}>Your Receipt</h1>
            {products.map((product) => {
                if (product.totalPrice > 0) {
                    return (
                        <div key={product.id} style={{ width: '50%', display: 'flex', marginTop: 10 }}>
                            <div style={{ width: '40%' }}>{product.title}</div>
                            <div style={{ width: '40%' }} >x{product.amount}</div>
                            <div style={{ color: '#53D8B9' }}>$ {product.totalPrice.toLocaleString()}</div>
                        </div>
                    );
                }
                return null;
            })}

            <div style={{ width: '50%', height: 2, background: 'black', marginTop: 20, marginBottom: 10 }} />

            <div style={{ width: '50%', display: 'flex' }}>
                <div style={{ width: '80%', fontSize: 20, fontWeight: 'bold' }}>TOTAL</div>
                <div style={{ color: '#53D8B9' }} >${totalReceipt.toLocaleString()}</div>
            </div>
        </div>
    )
}

export default Receipt
