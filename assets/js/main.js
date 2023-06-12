const snapContainer = document.querySelector(".snap")

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
            quote = fetch_data[((min, max) => {
                return Math.floor(Math.random() * (max - min)) + min
            })(0, fetch_data.length)]

            left.textContent = `"${quote.text}"\n\n- ${quote.author ? quote.author : "[ Redacted ]"}`
        }, 3000)
    })()

    const listeners = ["resize", "scroll"]
    listeners.forEach(event => {
        snapContainer.addEventListener(event, () => {
            if (innerWidth <= 1000) {
                right.style.display = "none"
            } else {
                right.style.display = "inherit"
            }
        })
    })
    
})()

snapContainer.addEventListener("scroll", () => {
    ScrollResponse.absoluteRectAll(".introduction").forEach((item) => {
        item.element.style.backgroundPosition = `calc(35% + ${ item.top * .1}px) ${item.top * .1}px`
    })
})