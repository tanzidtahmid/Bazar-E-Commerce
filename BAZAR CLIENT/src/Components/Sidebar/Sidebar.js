import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
           <ul className='unorder-list'>
            <li className='py-2'> <Link to ='/' className='text-white'> Home </Link></li>
            <li className='py-2'> <Link to ='/dashboard' className='text-white'> Dashboard</Link> </li> 
            <li className='py-2'> <Link to ='/allProducts' className='text-white'> All Products</Link></li>
            <li className='py-2'> <Link to ='/admins' className='text-white'> Admins</Link></li>
            <li className='py-2'> <Link to ='/addProducts' className='text-white'> Add Products </Link> </li>   
            </ul> 
        </div>
    );
};

export default Sidebar;