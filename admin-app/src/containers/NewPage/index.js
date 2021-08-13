import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../../components/Layout';
import Modal from '../../components/UI/Modal';
import Input from '../../components/UI/Input';
import linearCategories from '../../helpers/linearCategories';
import { useDispatch, useSelector } from 'react-redux';
import {createPage } from '../../actions';

/**
* @author
* @function Newpage
**/

const Newpage = (props) => {

    const [createModal, setCreateModal]=useState(false);
    const [title,setTitle]=useState('');
    const category=useSelector(state=>state.category);
    const [categories,setCategories]=useState([]);
    const [categoryId, setCategoryId]=useState('');
    const [desc,setDesc]=useState('');
    const [type,setType]=useState('');
    const [banners, setBanners]=useState([]);
    const [products, setProducts]=useState([]);
    const dispatch=useDispatch();
    const page=useSelector(state=>state.page);


    useEffect(()=>{
        // console.log('category',category);
        setCategories(linearCategories(category.categories));
        
    },[category]);

    useEffect(()=>{
        console.log(page);
        if(!page.loading){
            setCreateModal(false);
            setTitle('');
            setCategoryId('');
            setDesc('');
            setProducts([]);
            setBanners([]);
        }
    },[page]);

    const onCategoryChange=(e)=>{
        const category=categories.find(category=>category.value==e.target.value);
        setCategoryId(e.target.value);
        setType(category.type);
    }

    const handleBannerImages=(e)=>{
        console.log(e);
        setBanners([...banners,e.target.files[0]]);
    }
    const handleProductImages=(e)=>{
        console.log(e);
        setProducts([...products,e.target.files[0]]);
    }

    const submitPageForm=(e)=>{
        // e.target.preventDefault();

        if(title===""){
            alert('Es requerido el título');
            setCreateModal(false);
            return;
        }
        const form=new FormData();
        form.append('title',title);
        form.append('description',desc);
        form.append('category',categoryId);
        form.append('type',type);
        banners.forEach((banner,index)=>{
            form.append('banners',banner);
        });
        products.forEach((product,index)=>{
            form.append('products',product);
        });

        dispatch(createPage(form));

        // console.log({title,desc,categoryId,type,banners,products});
    }

    const renderCreatePageModal=()=>{
        return(
            <Modal
                show={createModal}
                modalTitle={'Crear nueva Página'}
                handleClose={()=>setCreateModal(false)}
                onSubmit={submitPageForm}
            >
                <Container>
                    <Row>
                        <Col>
                            {/* <select
                                className="form-control "
                                value={categoryId}
                                onChange={onCategoryChange}
                            >
                                <option value="">Seleccione Categoría</option>
                                {
                                    categories.map(cat=>
                                        <option key={cat._id} value={cat._id}>{cat.name}</option>    
                                    )
                                }
                            </select> */}
                            <Input
                                type="select"
                                value={categoryId}
                                onChange={onCategoryChange}
                                options={categories}
                                placeholder={'Seleccione Categoría'}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input
                                value={title}
                                onChange={(e)=>setTitle(e.target.value)}
                                placeholder={'Título de la página'}
                                className=""
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input
                                value={desc}
                                onChange={(e)=>setDesc(e.target.value)}
                                placeholder={'Descripción de Página'}
                                className=""
                            />
                        </Col>
                    </Row>

                        {   
                            banners.length > 0 ?
                            banners.map((banner,index)=>
                                <Row key={index}>
                                    <Col>{banner.name}</Col>
                                </Row>    
                            ) : null
                        }
                    <Row>
                        <Col>
                            <Input 
                                className="form-control "
                                type="file"
                                name="banners"
                                onChange={handleBannerImages}
                            />
                        </Col>
                    </Row>

                        {
                            products.length > 0 ?
                            products.map((product,index)=>
                                <Row key={index}>
                                    <Col>{product.name}</Col>
                                </Row>    
                            ) : null
                        }
                    <Row>
                        <Col>
                            <Input 
                                className="form-control "
                                type="file"
                                name="products"
                                onChange={handleProductImages}
                            />
                        </Col>
                    </Row>
                </Container>
                

            </Modal>
        );
    }
  return(
    <Layout sidebar>

        {
            page.loading ?
            <p>Creando página... por favor espere!!!!</p>
            :
            <>
                {renderCreatePageModal()}
                <button 
                    className="form-control form-control-sm" style={{width:'150px', color:'#000',display:'inline-block'}} 
                    onClick={()=>setCreateModal(true)}
                >Crear página</button>
            </>
        }
    </Layout>
   )

 }

export default Newpage