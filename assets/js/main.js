const introduction = (() => {
    const right = document.querySelectorAll(".right")[0]
    const left = document.querySelectorAll(".left")[0]

    const quotes = (() => {
        const xhr = new XMLHttpRequest()
        let fetch_data = new Array()
        let quote = "Loading..."
        xhr.open('GET', 'https://type.fit/api/quotes')
        xhr.addEventListener("load", () => {
            if (xhr.status !== 200) return 
                const response = JSON.parse(xhr.responseText)
                fetch_data.push(...response)
            
        })
        xhr.send()

        setInterval(() => {
            quote = fetch_data[((min,max) => {
                return Math.floor(Math.random() * (max - min)) + min
            })(0, fetch_data.length)].text

            left.textContent = quote
        }, 3000)
    })()

    window.addEventListener("resize", () => {
        if (innerWidth <= 1000) right.style.display = "none"
        else right.style.display = "inherit"
    })


})()