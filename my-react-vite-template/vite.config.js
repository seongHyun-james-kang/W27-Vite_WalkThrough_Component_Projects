import { defineConfig } from 'vite' //importing a helper from vite that provides better type checking and auto-complete
import react from '@vitejs/plugin-react' //it enables Vite to understand .jsx/.tsx files, fast refresh, and other React-Specific goodies
import eslint from 'vite-plugin-eslint';// it checks your code for potential errors, bad syntax, or code style issues


// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({ // exporting defineConfic.It is helpful for customizing behavior based on the environment
  plugins: [
    react(), // activates react support
    eslint({ // configures EsLint
      lintOnStart: true, // run lint checks as soon as the server starts
      failOnError: mode === "production" // only crash the build if lint errors are found in production
    })
  ],

  server: { // this tells Vite to automatically open your browser when the dev starts
    open: true
 }

}))
