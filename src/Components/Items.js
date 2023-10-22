function Item({ item, onDeleteItems, handleOnChangeItem }) {
    console.log(item)
    return (
        <li className={`bg-orange-300 rounded-lg p-2 shadow-[0_0px_20px_3px_rgba(0,0,0,.3)] ${item.packed ? "brightness-75" : ""}`}>
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

export default Item