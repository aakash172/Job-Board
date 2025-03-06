import { MantineProvider } from '@mantine/core';
import './App.css'
import '@mantine/core/styles.css';
import { Slider } from '@mantine/core';
import Home from './Pages/Home';
function App() {
  return (
    <>
      <MantineProvider>
        <Home />
      </MantineProvider>;

    </>
  )
}

export default App
