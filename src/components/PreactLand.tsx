import { h, Fragment } from 'preact'
import { useStore } from '@nanostores/preact'
import { preact_store, nanostore_counter } from '../signals'

const style = {
  outline: '1px solid rgb(0, 0, 255)',
}

const PreactLand = () => {
  const c = useStore(nanostore_counter)
  return (
    <div class="el preact" style={style}>
      <h3>Preact land</h3>
      <h1>Nanostore: {c}</h1>
      <button
        onClick={() => {
          preact_store.value++
          nanostore_counter.set(nanostore_counter.get() + 1)
        }}
      >
        Preact Store: {preact_store}
      </button>
    </div>
  )
}

export default PreactLand
