import Item from "Components/Items"
import { useState } from "react"

function ItemPackage({ items, onDeleteItems, handleOnChangeItem, multipleDelete, clearAllItems }) {

    const [sortBy, setSortBy] = useState("input")

    let sortedItems

    if (sortBy === "input") sortedItems = items
    if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
    if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))

    return (
        <main className="bg-[#fed97e] w-full min-h-[70%] p-2 flex flex-col justify-between">
            <ul className="flex flex-row items-start justify-end flex-wrap gap-7">
                {sortedItems.map((item, index) => <Item key={index} item={item} onDeleteItems={onDeleteItems} handleOnChangeItem={handleOnChangeItem} />)}
            </ul>
            <div className="f-center gap-8 m-8 ">
                <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="outline-none p-2 rounded-xl shadow">
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button className="bg-white p-2 rounded-xl shadow"
                    onClick={() => {
                        items.some(item => item.packed === true) ? multipleDelete(items.filter(item => item.packed).map(item => item.id)) : clearAllItems()
                    }} >
                    {
                        items.some(item => item.packed === true) ? "Multiple Delete" : "Clear All Items"
                    }
                </button>
            </div>
        </main>
    )
}

export default ItemPackage