declare type Navlink = {
    title: string // 路径名称
    label?: string // 标记 例如 Mail 10，10是标记
    icon: LucideIcon
    variant: 'default' | 'ghost'
    path: string
}
