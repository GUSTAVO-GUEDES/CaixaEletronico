import styles from  './SaqueFinal.module.css'
import React, { useContext, useEffect, useState } from 'react'
import Router from 'next/router'
import Context from '../../../components/UserContext/index'


const SaqueFinal = () => {
    const [user, setUser] = useContext<any>(Context)
    const [current_currency, setCurrent_currency] = useState('')
    const [posSaque, setPosSaque] = useState('')

    useEffect(()=>{
        if(user.acounts){
            setCurrent_currency(user.acounts[0].current_currency)
        }
        else{
            Router.push('/')
        }
    }, [])

    useEffect(()=>{
        if(user.saque != ''){
            let newValue = parseFloat(current_currency) - parseFloat(user.saque)
            setPosSaque(newValue.toString())
        }else{
            setPosSaque(current_currency)
        }
    }, [current_currency])

    return (

        <main>

            <div className={styles.cover}>

            <div className={styles.container}>



                <div className={styles.subcontainer1}>

                
                <div className={styles.container11}>
                    <div className={styles.btnestiliza1}></div>
                    <div className={styles.titulo}>CAIXA ELETRÔNICO</div>
                </div>

                <div className={styles.container11}>
                    <button className={styles.btnestiliza1}></button>
                    <div className={styles.btnestilizatt}>Saldo disponível:</div>
                </div>

                <div className={styles.container11}>
                    <button className={styles.btnestiliza1}></button>
                    <div className={styles.btnestilizatt}>Valor do Saque:</div>
                </div>

                <div className={styles.container11}>
                    <button className={styles.btnestiliza1}></button>
                    <div className={styles.btnestilizatt}>Saldo Final:</div>
                </div>

                <div className={styles.container11}>
                    <button className={styles.btnestiliza1}></button>
                    <button className={styles.btnestiliza} onClick={()=>Router.push('/saque')}>Voltar</button>
                    
                </div>

                <div className={styles.container11}>
                    <div className={styles.btnestiliza1}></div> 
                    <div className={styles.subtitulo}>Central de Ajuda</div>
                </div>

                </div>




                <div className={styles.subcontainer2}>

                
                <div className={styles.container11}>
                    <div className={styles.btnestiliza1}></div>
                    <div className={styles.btnestiliza1}></div>  
                </div>
                <div className={styles.container11}>
                <div className={styles.btnestilizatt}>R$ <span>{current_currency}</span></div>
                    <button className={styles.btnestiliza1}></button>  
                </div>
                <div className={styles.container11}>
                    <div className={styles.btnestilizatt}>R$ <span>{user.saque}</span></div>
                    <button className={styles.btnestiliza1}></button>  
                </div>
                <div className={styles.container11}>
                    <div className={styles.btnestilizatt}>R$ <span>{posSaque}</span></div>
                    <button className={styles.btnestiliza1}></button>  
                </div>
                <div className={styles.container11}>
                    <button className={styles.btnestiliza}>Sacar</button>
                    <button className={styles.btnestiliza1}></button>  
                </div>
                <div className={styles.container11}>
                    <div className={styles.subtitulo}>tel: 0800 - 9999999</div>
                    <div className={styles.btnestiliza1}></div>   
                </div>

                
                
                </div>





            </div>

            </div>

        </main>

    )
}

export default SaqueFinal