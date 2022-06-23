import styles from  './extrato.module.css'

import React, { useContext, useEffect, useState } from 'react'
import Router from 'next/router'
import Context from '../../components/UserContext/index'

interface Transacion{
    transaction_id: string,
    transaction_type: string,
    trasaction_value: string
}

const Extrato = () => {
    const [user, setUser] = useContext<any>(Context)
    const [table, setTable] = useState(<></>)
    const [currency, setCurrency] = useState('')

    useEffect(()=>{
        if(user.acounts){
            let getTransaction = user.transactions
            
            let newTable = getTransaction.slice(0).reverse().map((val:Transacion)=>{
                return (
                    <tr key={val.transaction_id}>
                        <td className={styles.body}>{val.transaction_type}</td>
                        <td className={styles.body}>R$ {val.trasaction_value}</td>
                    </tr>
                )
            })

            setTable(newTable)
            setCurrency(user.current_currency)
            
        }else{
            Router.push('/')
        }
    }, [])


    const print = () =>{
        var divToPrint=document.getElementById("printTable");
        var newWin= window.open("");

        if(newWin && divToPrint){
            newWin.document.write(divToPrint.outerHTML);
            newWin.print();
            newWin.close();
        }
    }


    return (
        <main className={styles.main}>
            <div className={styles.header}>
                Saldo Atual: R$ {currency}
            </div>

            <div className={styles.tableContainer}>
                <table className={styles.table} id='printTable'>
                    <thead>
                        <tr className={styles.title}>
                            <th className={styles.thTitle}>Tipo de Transferência</th>
                            <th className={styles.thTitle}>Valor</th>
                        </tr>
                    </thead>

                    <tbody>
                        {table}
                    </tbody>
                </table>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={()=>{Router.push('/')}}>Voltar</button>
                <button className={styles.button} onClick={print}>Imprimir</button>
            </div>
        </main>
    )
}

export default Extrato
