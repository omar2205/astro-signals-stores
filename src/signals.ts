import { signal } from '@preact/signals'
import { atom } from 'nanostores'
import { writable } from 'svelte/store'

// preact
export const preact_store = signal<number>(0)

// svelte
export const svelte_store = writable<number>(0)

// link preact signal with svelte store
preact_store.subscribe((v) => svelte_store.set(v))
svelte_store.subscribe((v) => (preact_store.value = v))

// nanostore
export const nanostore_counter = atom<number>(0)
