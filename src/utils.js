const paginate = (dataInput) => {
    const itemsPerPage = 10;
    const pages = Math.ceil(dataInput.length / itemsPerPage)
    // console.log(`pages = ${pages}`)


    const newItems = Array.from({length: pages}, (_,index) => {
        const start = index * pages
        const newArrayItems = dataInput.slice(start, start + pages)
        return newArrayItems
    })
    // console.log(newItems)
    return newItems
}

export default paginate
