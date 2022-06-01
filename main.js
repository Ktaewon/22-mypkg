const { sleep } = require('@ktaewon/22-mypkg')

async function main() {
    console.log('before sleep')
    await sleep(1000)
    console.log('after sleep')
}

main()