function ItemPackage({ items, onDeleteItems, handleOnChangeItem, multipleDelete }) {

    return (
        <main className="bg-[#f9c023] w-full h-[70%] p-4">
            {items.some(item => item.packed === true) ? (
                <div className="f-center mb-8 ">
                    <button onClick={() => multipleDelete(items.filter(item => item.packed).map(item => item.id))}
                        className="p-2 rounded-lg bg-[#777] text-white shadow-[0_0px_20px_3px_rgba(0,0,0,.5)] hover:brightness-90">Multiple Delete</button>
                </div>
            ) : null}
            <ul className="flex flex-row items-start justify-end flex-wrap gap-7">
                {items.map((item, index) => <Item onDeleteItems={onDeleteItems} handleOnChangeItem={handleOnChangeItem} key={index} item={item} />)}
            </ul>
        </main>
    )
}

function Item({ item, onDeleteItems, handleOnChangeItem }) {
    return (
        <li className={`bg-orange-200 rounded-lg p-2 shadow-[0_0px_20px_3px_rgba(0,0,0,.3)] ${item.packed ? "brightness-75" : ""}`}>
            <input
                type="checkbox"
                checked={item.packed}
                onChange={() => handleOnChangeItem(item.id)}
                className="mr-2"
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItems(item.id)} className="ml-4 delete">❌</button>
        </li>

    )
}

export default ItemPackage
