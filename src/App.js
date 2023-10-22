import "Assets/tailwind.css"
import Footer from "Components/Footer"
import Header from "Components/Header"
import Form from "Components/Form"
import ItemPackage from "Components/ItemPackage"
import { useState } from "react"

export default function App() {

  const [items, setItems] = useState([])

  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItems(id) {
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleOnChangeItem(id) {
    setItems(items => items.map(
      item => item.id === id ? { ...item, packed: !item.packed } : item
    ))
  }

  function multipleDelete(ids) {
    window.confirm("Are you sure you want to delete all the items you selected?") &&
      setItems(items => items.filter(item => !ids.includes(item.id)))
  }

  function clearAllItems() {
    window.confirm("Are you sure you want to delete all items?") && setItems([])
  }

  return (
    <div className="w-screen h-screen">
      <Header />
      <Form onAddItems={handleAddItems} />
      <ItemPackage items={items}
        onDeleteItems={handleDeleteItems}
        handleOnChangeItem={handleOnChangeItem}
        multipleDelete={multipleDelete}
        clearAllItems={clearAllItems} />
      <Footer items={items} />
    </div>
  )
}
