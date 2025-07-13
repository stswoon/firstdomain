import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'
import App from './App.tsx'
import {ViteReactSSG} from 'vite-react-ssg/single-page'

export const createRoot = ViteReactSSG(<App/>)


