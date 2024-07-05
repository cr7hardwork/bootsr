import React from 'react';

const Table = ({ handleSubmit, delete: Delete, change: Change, boots, newBoot, add: Add }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={newBoot.name}
                    onChange={Add}
                    placeholder="Name"
                    required
                />
                <input
                    type="text"
                    name="size"
                    value={newBoot.size}
                    onChange={Add}
                    placeholder="Size cm"
                    required
                />
                <input
                    type="number"
                    name="price"
                    value={newBoot.price}
                    onChange={Add}
                    placeholder="Price"
                    required 
                />
                <button type="submit">Add</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Price $</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {boots.map((boot) => (
                        <tr key={boot.id}>
                            <td>{boot.name}</td>
                            <td>{boot.size}</td>
                            <td>{boot.price}</td>
                            <td>
                                <button onClick={() => Delete(boot.id)}>Delete</button>
                                <button onClick={() => Change(boot)}>Change</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
