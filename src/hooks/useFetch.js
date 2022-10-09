import fetch from 'unfetch'
import useSWR from 'swr'

const fetcher = url => fetch(url).then(r => r.json())

const useFetch = (route) => useSWR(route, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
})

export { useFetch }