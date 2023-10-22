function Footer({ items }) {

    const packedItems = items.filter(item => item.packed).length
    const percentage = Math.round((packedItems / items.length) * 100)

    return (
        < footer className="w-full h-[10%] bg-[#666] text-white f-center font-bold p-2" >
            <em>{
                items.length === 0 ? "Add some item to your pack! "
                    :
                    percentage === 100 ?
                        'You packed everything! Ready to go ✈2'
                        :
                        `You have ${items.length} items on your list. You already packed ${packedItems}, (${percentage}%)`
            }
            </em>
        </footer >
    )
}

export default Footer
