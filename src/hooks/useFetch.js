import fetch from 'unfetch'
import useSWR from 'swr'

const defaultOptionsSWR = {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
}

const fetcher = async (url, data, method) => await fetch(url, {
    method: method ?? 'GET',
    body: data ?? null
}).then(r => r.json())

const useFetch = (route, fetch, data, method) => useSWR(
    route,
    fetch ?? (url => fetcher(url, data, method)),
    defaultOptionsSWR
)

export { useFetch }