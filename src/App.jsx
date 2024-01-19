import { useState } from 'react'
import Info from './components/Info'
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <>
      <RecoilRoot>
        <Info></Info>
      </RecoilRoot>
    </>
  )
}

export default App
