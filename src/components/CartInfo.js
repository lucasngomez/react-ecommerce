import React, {useContext} from 'react';

const CartInfo = ({cartData, context}) => {

    const {clpCurrencyFormat, removeItem} = useContext(context);

    return (
        <div className="cart-info">
            <table>
                <thead>
                    <tr>
                        <th>PRODUCTO</th>
                        <th></th>
                        <th>CANTIDAD</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cartData.map(item => {
                        return(
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CartInfo
