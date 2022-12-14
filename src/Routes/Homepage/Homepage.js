import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
    const arr = [
        {
            name: 'Dairy',
            link: 'dairy',
            src: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        },
        {
            name: 'Fruits',
            link: 'fruits',
            src: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        },
        {
            name: 'Meat',
            link: 'meat',
            src: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        },
        {
            name: 'Vegetables',
            link: 'vegetables',
            src: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=842&q=80',
        },
        {
            name: 'Gifts',
            link: 'gifts',
            src: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        },
    ];

    return (
        <>
            <div className='homepage-container'>
                <div className='homepage-heading'>
                    Top Products
                </div>
                <div className='homepage-category-heading'>
                    Select From One Of These Categories
                </div>
                <div className='homepage-categories'>
                    {
                        arr.map(el => <Link className='homepage-link-element' to={el.link}>
                            <img className='homepage-item-image' src={el.src} alt={el.name} />
                            <div className='homepage-item-name'>{el.name}</div>
                        </Link>)
                    }
                </div>
            </div>
        </>
    );
}

export default Homepage;
