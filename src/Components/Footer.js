function Footer({ itemsLength }) {
    return (
        <footer className="w-full h-[10%] bg-[#666] text-white f-center font-bold p-2">
            <em>You have {itemsLength} items on your list. You already packed (X%)</em>
        </footer>
    )
}

export default Footer