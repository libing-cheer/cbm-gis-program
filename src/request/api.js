import { get, post } from './http'

export const login = p => post('/login', p)
export const register = p => post('/register', p)
export const getUserInfo = p => post('/getUserInfo', p)

export const cbmProperty = () => get('/data/cbmProperty')
export const cbmGas = () => get('/data/cbmGas')
export const wellPosition = () => get('/data/wellPosition')

export const uploadKmeans = p => post('/gnn/uploadKmeans', p)
export const getElbowResult = p => post('/gnn/getElbowResult', p)
export const getClusterResult = p => post('/gnn/getClusterResult', p)
export const displaywell = p => post('/gnn/displaywell', p)
export const getConnect = p => post('/gnn/getConnect', p)
export const getAdjacent = p => post('/gnn/getAdjacent', p)
export const getPrediction = p => post('/gnn/getPrediction', p)
export const getTestAllImg = () => get('/gnn/getTestAllImg')
export const getTest90DayImg = () => get('/gnn/getTest90DayImg')
