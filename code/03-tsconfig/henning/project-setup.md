# Project Setup

## Config File

- From Project root run `tsc --init`

### Important Options

**target:**
Compile to the set version of JS. Useful if you need to support older Browsers.

**lib:**
Controll which builtin type libraries will be loaded.

**jsx options**
Used in jsx Projects like React. Most of the time already configured via using `vite` for example

**module**
Defines how imports and exports work within the project.
For modern Node projects `NodeNext` is a good option, supporting moder syntax.

**allowJS**
allow/disallow `*.js` files within the project.

**outDir**
specify output directory for compiled code, for example `./dist`

**removeComments**
self explanatory

**noEmitOnError**
only output files if compilation ran without errors

### Configure Type Checking

**strict**
enables most other checking rules - **recommended**

### Configuring Code Quality Checks

To enable some "quality of life" checks:

```json
{
  "noUnusedLocals": true, // helps you detect unused variable
  "noUnusedParameters": true, // helps you detect unused function parameters
  "noFallthroughCasesInSwitch": true // helps you detect switch cases without break or return
}
```

## Installing type libraries

`npm install @types/library-name`
