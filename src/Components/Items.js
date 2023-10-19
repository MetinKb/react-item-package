function ItemPackage({ items, onDeleteItems, handleOnChangeItem }) {

    return (
        <main className="bg-[#ffd35c] w-full h-[70%] p-4">
            <ul className="flex flex-row items-start justify-end flex-wrap gap-7">
                {items.map((item, index) => <Item onDeleteItems={onDeleteItems} handleOnChangeItem={handleOnChangeItem} key={index} item={item} />)}
            </ul>
        </main>
    )
}

function Item({ item, onDeleteItems, handleOnChangeItem }) {
    return (
        <li className={`bg-orange-300 rounded-lg p-2 ${item.packed ? "brightness-75" : ""}`} >
            <input type="checkbox" onChange={() => handleOnChangeItem(item.id)} value={item.packed} className="mr-2" />
            < span style={item.packed ? { textDecoration: "line-through" } : {}} >
                {item.quantity} {item.description}
            </span >
            <button onClick={() => onDeleteItems(item.id)} className="ml-4 delete" >❌</button>
        </ li >
    )
}

export default ItemPackage