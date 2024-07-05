import React, { useState } from 'react';
import Table from './Table';
const Main = () => {
    const [boots, setBoots] = useState([
        { id: 1, name: 'Nike', size: '26cm', price: '180' },
        { id: 2, name: 'Adidas', size: '26cm', price: '170' },
        { id: 3, name: 'Puma', size: '26cm', price: '165' }
    ]);

    const [newBoot, setNewBoot] = useState({ name: '', size: '', price: '' });
    const [editId, setEditId] = useState(null);

    const Add = (e) => {
        const { name, value } = e.target;
        setNewBoot((boot) => ({
            ...boot,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editId) {
            setBoots((boot) =>
                boot.map((item) =>
                    item.id === editId ? { ...item, ...newBoot } : item
                )
            );
            setEditId(null);
            setNewBoot({ name: '', size: '', price: '' });
        }
        }
       

    const Delete = (id) => {
        setBoots((boot) => boot.filter((boot) => boot.id !== id));
    };


    const Change = (boot) => {
        setNewBoot({ name: boot.name, size: boot.size, price: boot.price});
        setEditId(boot.id);
    };

    return (
        
         <Table handleSubmit = {handleSubmit}  delete = {Delete} change = {Change} boots = {boots} newBoot = {newBoot} add = {Add} />
        
    );
};

export default Main;
