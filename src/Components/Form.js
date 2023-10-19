import { useState } from "react"

function Form({ onAddItems }) {

    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)

    function handlingSubmit(e) {
        e.preventDefault()

        if (!description) {
            alert("Please add an item description!")
            return
        }
        const newItem = { id: Date.now(), description, quantity, packed: false }

        onAddItems(newItem)
        setDescription("")
        setQuantity(1)
    }

    return (
        <form onSubmit={handlingSubmit} className="flex items-center gap-3 w-full h-[10%] f-center bg-[#d2e8ff]">
            <h3 className="text-lg">What do you need for your trip 👜?</h3>
            <select value={quantity} onChange={e => setQuantity(Number(e.target.value))} className="rounded-lg p-1 outline-none">
                {
                    Array.from({ length: 20 }, (_, i) => i + 1).map((num, index) => (
                        <option value={num} key={index}>{num}</option>
                    ))

                }
            </select>
            <input onChange={e => setDescription(e.target.value)} value={description} className="rounded-md p-1 outline-none"
                type="text" placeholder="Item Name..." />
            <button className="bg-[#777] p-1 text-white rounded-lg hover:brightness-110">Add Item</button>
        </form>
    )
}

export default Form