import { Folder, Settings } from 'lucide-react'
import { useReducer } from 'react'

const navlinks: Navlink[] = [
    {
        label: '',
        icon: Folder,
        title: 'Projects',
        variant: 'ghost',
        path: '/projects/',
    },
    {
        label: '',
        icon: Settings,
        title: 'Settings',
        variant: 'ghost',
        path: '/settings/',
    },
]

interface State {
    currentRoute: Navlink | null
    sidebarCollapsed: boolean
    navlinks: Navlink[]
}

type Actions =
    | TAction<'setCurrentRoute', Navlink>
    | TAction<'toggleSidebarCollapse'>

const initState: State = {
    currentRoute: null,
    sidebarCollapsed: false,
    navlinks,
}
function reducer(state: State, action: Actions) {
    switch (action.type) {
        case 'setCurrentRoute': {
            return { ...state, currentRoute: action.payload }
        }
        case 'toggleSidebarCollapse': {
            return { ...state, sidebarCollapsed: !state.sidebarCollapsed }
        }
    }
}

function navigation() {
    const [state, dispatch] = useReducer(reducer, initState)
    return {
        dispatch,
        state,
    }
}

export default navigation
