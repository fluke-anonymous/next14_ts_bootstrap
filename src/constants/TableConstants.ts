export interface IFill {
    background?: string
    color?: string
    forceStyle?: boolean
}
export interface IChildren {
    title?: string
    key?: string
    keys?: any
    slot?: string
    align?: string
    sort?: boolean
    fill?: IFill
    minWidth?: string
    summaryFunc?: Function
    children?: IChildren[]
}
export interface Icolumn {
    type?: string
    title?: string
    key?: string
    keys?: any
    slot?: string
    align?: string
    width?: string
    minWidth?: string
    sort?: boolean
    summaryFunc?: Function
    children?: IChildren[]
    color?: string
    class?: string
    footTitle?: string
    summary?: string
    fixed?: string
    fill?: IFill
    valign?: 'top' | 'middle' | 'bottom' | 'baseline'
}