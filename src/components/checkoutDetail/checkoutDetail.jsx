import './checkoutDetail.css';
import { useState } from 'react';

const CheckoutDetail = ({items, totalCart, createOrder}) => {

    const [formFields, setFormFields] = useState({
        name: "",
        email: "",
        phone: ""
    });
    
    function handleChange(evt) {
        setFormFields({ ...formFields, [evt.target.name]: evt.target.value });
    }

    function onSubmit(event) {
        createOrder(formFields);
        setFormFields({
            name : "",
            email : "",
            phone : ""
        });
    }

    return(
        <div className="checkoutDetail">
            <div className="personalInfoContainer">
                <div className="personalInfo">
                    <form action="#">
                        <div className="input">
                            <label htmlFor="">Nombre: </label><br />
                            <input value={formFields.name} type="text" className="form-control" name="name" onChange={handleChange} autoComplete="off"/>
                        </div>
                        <div className="input">
                            <label htmlFor="">Email: </label><br />
                            <input value={formFields.email} type="email" className="form-control" name="email" onChange={handleChange} autoComplete="off"/>
                        </div>
                        <div className="input">
                            <label htmlFor="">Telefono: </label><br />
                            <input value={formFields.phone} type="text" className="form-control" name="phone" onChange={handleChange} autoComplete="off"/>
                        </div>
                        <button 
                            type="button" 
                            onClick={onSubmit}
                            disabled={!(formFields.name && formFields.email && formFields.phone)}
                        >
                            Finalizar Compra
                        </button>
                    </form>
                </div>
            </div>
            <div className="containerResumeCart">
                <div className="containerResume">
                    <h4 style={{paddingBottom:'15px', paddingTop:'10px'}}>Resumen de compra</h4>
                    <table>
                        <thead>
                            <tr className="thead">
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Sub-total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            items.map((item) => (
                                <tr key={item.id}>
                                    <td style={{display:'flex', alignItems:'center'}}>
                                        <img src={item.photo} alt={item.name} width="20" height="20"/>
                                        <p style={{fontSize:'12px', marginLeft:'5px'}}>{item.name}</p>
                                    </td>
                                    <td>
                                        {item.cantidad}
                                    </td>
                                    <td>
                                        {item.cantidad * item.price}
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                    <h3>Total: ${totalCart}</h3>
                </div>
            </div>
        </div>
    )
}

export default CheckoutDetail;