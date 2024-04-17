'use client'

import { PropsWithChildren, createContext, useContext } from 'react'
import auth from './auth'
import navigation from './navigation'

type IStore = ReturnType<typeof useProvideStoreContext>

const StoreContext = createContext<IStore | null>(null)

function useProvideStoreContext() {
    return {
        auth: auth(),
        navigation: navigation(),
    }
}

type TProvideStoreProps = PropsWithChildren<{}>

export function ProvideStore({ children }: TProvideStoreProps) {
    const value = useProvideStoreContext()
    return (
        <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
    )
}

export function useSelector<K extends keyof IStore>(
    name: K
): IStore[K]['state'] {
    const context = useContext(StoreContext)
    return context[name].state
}

export function useDispatch<K extends keyof IStore>(
    name: K
): IStore[K]['dispatch'] {
    const context = useContext(StoreContext)
    return context[name].dispatch
}
