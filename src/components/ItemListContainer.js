import React , { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { Row, Container, CardGroup } from 'react-bootstrap'

const products = [
    {
        category : "1",
        id : "MLA832761839",
        title : "Jordan Air 1 Mid",
        price : 23425,
        pictureUrl : "https://essential.vteximg.com.br/arquivos/ids/358236-1000-1000/306-6938_1.jpg?v=637377504495400000"
    },
    {
        category : "1",
        id : "MLA871170293",
        title : "Nike Cortez Basic Leather",
        price : 9199,
        pictureUrl : "https://essential.vteximg.com.br/arquivos/ids/343080-1000-1000/306-6283_1.jpg?v=637341659194300000"
    },
    {
        category : "2",
        id : "MLA883627045",
        title : "Nike Air Force 1 '07 SE",
        price : 15499,
        pictureUrl : "https://essential.vteximg.com.br/arquivos/ids/401375-1000-1000/306-7588_1.jpg?v=637455417525900000"
    },
    {
        category : "2",
        id : "MLA749898152",
        title : "Puma Cali Sport Mix",
        price : 9199,
        pictureUrl : "https://essential.vteximg.com.br/arquivos/ids/362065-1000-1000/961-1205_1.jpg?v=637384716113330000"
    }
]

const ItemListContainer = () => {

    const [ items, setItems ] = useState([])
    const { id } = useParams()

    useEffect(()=>{
        
        let request = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(products)
                console.log(res)
            },2000)
        })

        request
        .then(res=>{
            if(id){
                setItems(res.filter(item=>item.category===id))
            }else{
                setItems(res)
            }
        })
        .catch(err=>{
            console.log(err)
        })

    },[id])

    return (
        <>
            <Row className="d-flex justify-content-center">
                    <ItemList items={items}/>
            </Row>
        </>
    )
}

export default ItemListContainer