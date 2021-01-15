import React, { useContext } from 'react';


const CartTotal = ({total, context}) => {

    return (
        <div className="order-summary">
            <h3>Resumen</h3>
            <table>
                <tbody>
                    <tr>
                        <td>Total</td>
                        <td>{total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CartTotal
