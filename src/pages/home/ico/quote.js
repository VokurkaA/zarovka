function Quote({author, text}) {
    return (
        <div className='bg-accent shadow-md min-w-96 h-min min-h-36 p-6 rounded-xl text-sm'>
            <p>"{text}"</p>
            <p className="text-right">~{author}</p>
        </div>
    )
}
export default Quote;