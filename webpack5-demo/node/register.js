import { register } from 'node:module'
import { pathToFileURL } from 'node:url'

register('./node_modules/ts-node/esm', pathToFileURL('./'))
