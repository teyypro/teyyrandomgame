import { writable } from 'svelte/store'

export let step = writable("0")
export let click = writable()
export let name = writable([])
export let pickName = writable("")
export let TFPick = writable(false)
export let TFbackground = writable(false)
export let pass = writable(false)
export let TFmusic = writable(true)