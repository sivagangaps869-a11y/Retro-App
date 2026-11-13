const jsonServer=require('json-server')
const retroServer=jsonServer.create()
const router=jsonServer.router("db.json")
const middileware=jsonServer.defaults()

const PORT=3000

retroServer.use(middileware)
retroServer.use(router)

retroServer.listen(PORT,()=>{
    console.log(`Retro-sever started running at PORT:${PORT}...and waiting for client request!`);
    
})